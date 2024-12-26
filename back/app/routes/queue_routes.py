from flask import Blueprint, request, jsonify
from ..services.queue_service import add_message, get_next_message, get_queue_stats

queue_routes = Blueprint('queue_routes', __name__)

@queue_routes.route('/api/<queue_name>', methods=['POST'])
def post_message(queue_name):
    message = request.get_json()

    if not message:
        return jsonify({"error": "Message body is required"}), 400

    add_message(queue_name, message)
    return jsonify({"message": "Message added to the queue"}), 201


@queue_routes.route('/api/<queue_name>', methods=['GET'])
def get_message(queue_name):
    timeout = request.args.get('timeout', default=10, type=int)
    message = get_next_message(queue_name, timeout)

    if message is None:
        return jsonify({"message": "No messages in queue"}), 204
    
    return jsonify(message), 200


@queue_routes.route('/api/stats', methods=['GET'])
def get_stats():
    stats = get_queue_stats()
    return jsonify(stats), 200
