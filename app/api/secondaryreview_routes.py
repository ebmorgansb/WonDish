from flask import Blueprint, render_template, jsonify, request
from flask_login import login_required, current_user
from app.models import PrimaryReview, SecondaryReview, db
from app.forms.edit_secondaryreview import EditSecondaryReviewForm
from app.forms.secondary_review import SecondaryReviewForm




secondaryreviews_routes = Blueprint('secondaryreviews', __name__, url_prefix="/api/secondaryreviews")

#get all secondary reviews based on primary review id
@secondaryreviews_routes.route('assocprime/<int:primaryreview_id>', methods=['GET'])
# @login_required
def all_secondary_reviews(primaryreview_id):
  secondary_reviews = SecondaryReview.query.filter(primaryreview_id == SecondaryReview.primaryreview_id).all()
  second_reviews = [review.to_dict() for review in secondary_reviews]
  print(second_reviews, 'what is going on LOL')
  return jsonify(second_reviews)

# get secondary review by id
@secondaryreviews_routes.route('/<int:secondaryreview_id>', methods=['GET'])
def primaryreview(secondaryreview_id):
  query = SecondaryReview.query.get(secondaryreview_id)
  if not query:
    return {'errors': ['This review does not exist']}, 401
  secondaryreview = query.to_dict()
  # print('Inda route========', primaryreview)
  return jsonify(secondaryreview)

# create new secondary review
@secondaryreviews_routes.route('/create/assocprime/<int:primaryreview_id>', methods=['POST'])
@login_required
def create_secondaryreview(primaryreview_id):
  print('tetetetetetetetetete')
  form = SecondaryReviewForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  data = form.data

  if form.validate_on_submit():
    secondary_review = SecondaryReview(
      name = data['name'],
      description = data['description'],
      category = data['category'],
      image = data['image'],
      address = data['address'],
      rating = data['rating'],
      user_id = data['user_id'],
      primaryreview_id = primaryreview_id
    )
    db.session.add(secondary_review)
    db.session.commit()
    return jsonify(secondary_review.to_dict())
  return jsonify(form.errors)

# edit secondary review by id
@secondaryreviews_routes.route('/edit/<int:secondaryreview_id>', methods=['PUT'])
@login_required
def edit_secondaryreview(secondaryreview_id):
  form = EditSecondaryReviewForm()
  query = SecondaryReview.query.get(secondaryreview_id)
  if not query:
    return {'errors': ['This review does not exist']}, 401
  old_secondaryreview = query.to_dict()
  print('edit SECONDARY', old_secondaryreview)
  form['csrf_token'].data = request.cookies['csrf_token']
  data = form.data

  if query and form.validate_on_submit():
      query.name = old_secondaryreview['name']
      query.description = str(data['description'])
      query.category = data['category']
      # query.image = old_secondaryreview['image']
      query.address = old_secondaryreview['address']
      query.rating = data['rating']
      query.user_id = old_secondaryreview['user_id']
      db.session.commit()
      return jsonify(query.to_dict())
  return jsonify(form.errors)

# delete secondary review
@secondaryreviews_routes.route('/delete/<int:secondaryreview_id>', methods=['DELETE'])
@login_required
def delete_primaryreviews(secondaryreview_id):
  secondary_review = SecondaryReview.query.get(secondaryreview_id)
  if not secondary_review:
    return {'errors': ['That secondary review does not exist']}, 401
  db.session.delete(secondary_review)
  db.session.commit()
  return jsonify('Successfully deleted a secondary review')
