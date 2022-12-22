from .db import db, environment, SCHEMA, add_prefix_for_prod

class SecondaryReview(db.Model):
    __tablename__ = 'secondary_reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    category = db.Column(db.String(50))
    image =  db.Column(db.String(2000), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    primaryreview_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('primary_reviews.id')), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    secondaryreview_to_primaryreview = db.relationship('PrimaryReview', back_populates='primaryreview_to_secondaryreview')


    def to_dict(self):
        return{
            'id':self.id,
            'name':self.name,
            'description':self.description,
            'category':self.category,
            'address':self.address,
            'rating':self.rating,
            'user_id':self.user_id,
            'primaryreview_id': self.primaryreview_id,
            'created_at':self.created_at,
            'updated_at':self.updated_at
        }