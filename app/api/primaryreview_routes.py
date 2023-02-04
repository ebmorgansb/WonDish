from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)
from flask import Blueprint, render_template, jsonify, request
from flask_login import login_required, current_user
from app.models import PrimaryReview, db

from app.forms.edit_primaryreview import EditPrimaryReviewForm
from app.forms.primary_review import PrimaryReviewForm


primaryreviews_routes = Blueprint('primaryreviews', __name__, url_prefix="/api/primaryreviews")

#get all primary reviews
@primaryreviews_routes.route('/all', methods=['GET'])
# @login_required
def allprimaryreviews():
  query = PrimaryReview.query.all()
  primaryreviews = [review.to_dict() for review in query]
  return jsonify(primaryreviews)

#get primary review by id
@primaryreviews_routes.route('/<int:primaryreview_id>', methods=['GET'])
def primaryreview(primaryreview_id):
  query = PrimaryReview.query.get(primaryreview_id)
  if not query:
    return {'errors': ['This review does not exist']}, 401
  primaryreview = query.to_dict()
  print('Inda route========', primaryreview)
  return jsonify(primaryreview)

#create new primary review
@primaryreviews_routes.route('/create', methods=['POST'])
@login_required
def create_primaryreviews():
  form = PrimaryReviewForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  data = form.data
  if form.validate_on_submit():
    if "image" not in request.files:
      return {"errors": "image required"}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
      return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]
    # flask_login allows us to get the current user from the request
    data = form.data

    primary_review = PrimaryReview(
      name = data['name'],
      description = data['description'],
      category = data['category'],
      image = url,
      address = data['address'],
      rating = data['rating'],
      user_id = data['user_id'],
      restaurant_id = data['restaurant_id']
        )

    db.session.add(primary_review)
    db.session.commit()
    return jsonify(primary_review.to_dict())
  return jsonify(form.errors)

#edit primary review by id
@primaryreviews_routes.route('/edit/<int:primaryreview_id>', methods=['PUT'])
@login_required
def edit_primaryreview(primaryreview_id):
  form = EditPrimaryReviewForm()
  query = PrimaryReview.query.get(primaryreview_id)
  if not query:
    return {'errors': ['This review does not exist']}, 401
  oldPrimaryReview = query.to_dict()
  print('test', oldPrimaryReview)
  form['csrf_token'].data = request.cookies['csrf_token']
  data = form.data

  if query and form.validate_on_submit():
      query.name = oldPrimaryReview['name']
      query.description = str(data['description'])
      query.category = data['category']
      query.image = oldPrimaryReview['image']
      query.address = oldPrimaryReview['address']
      query.rating = data['rating']
      query.user_id = oldPrimaryReview['user_id']
      db.session.commit()
      return jsonify(query.to_dict())
  return jsonify(form.errors)

@primaryreviews_routes.route('/delete/<int:primaryreview_id>', methods=['DELETE'])
@login_required
def delete_primaryreviews(primaryreview_id):
    allSecondaryReviews = SecondaryReview.query.filter(primaryreview_id == SecondaryReview.primaryreview_id).all()
    if len(allSecondaryReviews) == 0:
      onePrimaryReview = PrimaryReview.query.get(primaryreview_id)
      if not onePrimaryReview:
        return {'errors': ['That list does not exist']}, 401
      db.session.delete(onePrimaryReview)
      db.session.commit()
      return jsonify('Successfully deleted a primary review that does not have associated secondary reviews')
    return jsonify('You cannot delete a Primary Review that has associated Secondary Reviews')
