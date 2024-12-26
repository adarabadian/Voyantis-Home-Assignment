import requests

def get_users():
	try:
		response = requests.get('https://jsonplaceholder.typicode.com/posts')
		response.raise_for_status()
		return response.json()
	except requests.exceptions.RequestException as e:
		return {"error": str(e)}
