from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired, ValidationError

class EditSecondaryReviewForm(FlaskForm):
  description = StringField('Description', validators=[DataRequired()])
  category = StringField('Category')
  rating = IntegerField('Rating', validators=[DataRequired()])
  submit = SubmitField("Edit Secondary Review")