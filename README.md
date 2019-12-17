Ashley Little
littl475
5314728
CSCI 4131

Microblog created by following Miguel Grinberg's Flask Tutorial (parts 1-9 and 11).
https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world

Site works on a localhost as per the tutorial instructions. Requires the following inputs  -

(Python installed)
python3 -m venv venv
virtualenv venv
source venv/bin/activate (venv\Scripts\activate if Windows)
pip install flask
pip install python-dotenv
pip install flask-wtf
pip install flask-sqlalchemy
pip install flask-migrate
pip install flask-boostrap
flask db init
flask db migrate -m "users table"
flask db migrate -m "posts table"
flask db migrate -m "followers"
flask db upgrade
pip install flask-login
export FLASK_APP=microblog.py (set FLASK_APP=microblog.py if Windows)
flask run

Go to http://localhost:5000/
