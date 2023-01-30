from .db import db, environment, SCHEMA, add_prefix_for_prod

class PrimaryReview(db.Model):
    __tablename__ = 'primary_reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    description = db.Column(db.String(1000), nullable=False)
    category = db.Column(db.String(50))
    image =  db.Column(db.String(2000))
    address = db.Column(db.String(255))
    rating = db.Column(db.Integer,)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    restaurant_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('restaurants.id')))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    primaryreview_to_user = db.relationship('User', back_populates='user_to_primaryreview')
    primaryreview_to_restaurant = db.relationship('Restaurant', back_populates='restaurant_to_primaryreview')

    def to_dict(self):
        return{
            'id':self.id,
            'name':self.name,
            'description':self.description,
            'category':self.category,
            'image':self.image,
            'address':self.address,
            'rating':self.rating,
            'user_id':self.user_id,
            'restaurant_id':self.restaurant_id,
            'created_at':self.created_at,
            'updated_at':self.updated_at
        }