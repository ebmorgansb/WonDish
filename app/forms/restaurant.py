from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired, ValidationError

class RestaurantForm(FlaskForm):
  name = StringField('Name', validators=[DataRequired()])
  address = StringField('Address', validators=[DataRequired()])
  user_id = IntegerField('User_id', validators=[DataRequired()])
  submit = SubmitField("Create a Restaurant")