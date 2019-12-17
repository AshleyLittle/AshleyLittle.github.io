Project Type: Plan C (Grade C)<br>
Name: Ashley Little<br>
App: Instructions for localhost use below<br>
Repository: https://github.com/AshleyLittle/AshleyLittle.github.io<br>
<br>
Microblog created by following Miguel Grinberg's Flask Tutorial (parts 1-9 and 11).<br>
https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world<br>
<br>
Site works on a localhost as per the tutorial instructions. Requires the following inputs-<br>
<br>
(Python installed)<br>
python3 -m venv venv<br>
virtualenv venv<br>
source venv/bin/activate (venv\Scripts\activate if Windows)<br>
pip install flask<br>
pip install python-dotenv<br>
pip install flask-wtf<br>
pip install flask-sqlalchemy<br>
pip install flask-migrate<br>
pip install flask-boostrap<br>
flask db init<br>
flask db migrate -m "users table"<br>
flask db migrate -m "posts table"<br>
flask db migrate -m "followers"<br>
flask db upgrade<br>
pip install flask-login<br>
export FLASK_APP=microblog.py (set FLASK_APP=microblog.py if Windows)<br>
flask run<br>
<br>
Go to http://localhost:5000/<br>
