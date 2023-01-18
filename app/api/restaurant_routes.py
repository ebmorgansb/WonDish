from flask import Blueprint, render_template, jsonify, request
from flask_login import login_required, current_user
from app.models import PrimaryReview, SecondaryReview, Restaurant, db, Image
from app.forms.restaurant import RestaurantForm



restaurant_routes = Blueprint('restaurants', __name__, url_prefix="/api/restaurants")

#get all restaurants
@restaurant_routes.route('/all', methods=['GET'])
# @login_required
def allrestaurants():
  query = Restaurant.query.all()
  restaurants = [restaurant.to_dict() for restaurant in query]
  return jsonify(restaurants)

#get restaurant by id
@restaurant_routes.route('/<int:restaurant_id>', methods=['GET'])
def restaurant(restaurant_id):
  query = Restaurant.query.get(restaurant_id)
  if not query:
    return {'errors': ['This restaurant does not exist']}, 401
  restaurant = query.to_dict()
  return jsonify(restaurant)