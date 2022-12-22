from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired, ValidationError

class SecondaryReviewForm(FlaskForm):
  name = StringField('Name', validators=[DataRequired()])
  description = StringField('Description', validators=[DataRequired()])
  category = StringField('Category')
  image = StringField('Image', validators=[DataRequired()])
  address = StringField('Address', validators=[DataRequired()])
  rating = IntegerField('Rating', validators=[DataRequired()])
  user_id = IntegerField('User_id', validators=[DataRequired()])
  primaryreview_id = IntegerField('Primary_Review_Id', validators=[DataRequired()])
  submit = SubmitField("Create Secondary Review")