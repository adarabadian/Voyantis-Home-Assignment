from flask import Blueprint, jsonify
from ..services.user_service import get_users
import requests

main = Blueprint('main', __name__)

@main.route('/posts', methods=['GET'])
def get_posts():
	try:
		posts = get_users()
		return jsonify(posts)
	except requests.exceptions.RequestException as e:
		return jsonify({"error": str(e)}), 500