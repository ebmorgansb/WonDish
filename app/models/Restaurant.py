from .db import db, environment, SCHEMA, add_prefix_for_prod

class Restaurant(db.Model):
    __tablename__ = 'restaurants'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    address = db.Column(db.String(255))
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    restaurant_to_user = db.relationship('User', back_populates='user_to_primaryreview')
    restaurant_to_primaryreview = db.relationship('PrimaryReview', back_populates='primaryreview_to_restaurant')

    def to_dict(self):
        return{
            'id':self.id,
            'name':self.name,
            'address':self.address,
            'user_id':self.user_id,
            'created_at':self.created_at,
            'updated_at':self.updated_at
        }