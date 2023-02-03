"""create_profiles_table

Revision ID: b3c9aa38b829
Revises: 9c9abd50e273
Create Date: 2022-11-30 09:47:33.377324

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b3c9aa38b829'
down_revision = '9c9abd50e273'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    # op.create_table('users',
    #                 sa.Column('id', sa.Integer(), nullable=False),
    #                 sa.Column('firstname', sa.String(
    #                     length=40), nullable=False),
    #                 sa.Column('email', sa.String(length=255), nullable=False),
    #                 sa.Column('hashed_password', sa.String(
    #                     length=255), nullable=False),
    #                 sa.Column('lookingfor', sa.String(
    #                     length=6), nullable=False),
    #                 sa.Column('image', sa.String(
    #                     length=255), nullable=False),
    #                 sa.PrimaryKeyConstraint('id'),
    #                 sa.UniqueConstraint('email'),
    #                 )

    # op.create_table('likes',
    #                 sa.Column('id', sa.Integer(), nullable=False),
    #                 sa.Column('user_id', sa.Integer(), nullable=True),
    #                 sa.Column('liked_user_id', sa.Integer(), nullable=False),
    #                 sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    #                 sa.PrimaryKeyConstraint('id')
    #                 )

    op.create_table('profiles',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('bio', sa.String(length=500), nullable=False),
    sa.Column('work', sa.String(length=50), nullable=False),
    sa.Column('age', sa.Integer(), nullable=False),
    sa.Column('hometown', sa.String(length=50), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('blogs',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('user_id', sa.Integer(), nullable=False),
                    sa.Column('user_name', sa.String(
                        length=50), nullable=False),
                    sa.Column('post', sa.String(length=500), nullable=False),
                    sa.Column('image1', sa.String(length=500)),
                    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
                    sa.PrimaryKeyConstraint('id')
                    )
    op.create_table('matches',
                    sa.Column('id', sa.Integer(), nullable=False),
                    sa.Column('user_id', sa.Integer(), nullable=False),
                    sa.Column('score', sa.Integer(), nullable=False),
                    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
                    sa.PrimaryKeyConstraint('id')
                    )
    ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('profiles')
    op.drop_table('likes')
    op.drop_table('users')
    # ### end Alembic commands ###
