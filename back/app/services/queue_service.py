import threading
import logging
import time

logging.basicConfig(level=logging.INFO)

# In-memory storage for queues
queues = {}
lock = threading.Lock()

def create_queue_if_not_exists(queue_name):
    if queue_name not in queues:
        queues[queue_name] = []


def delete_queue_if_empty(queue_name):
    if queue_name in queues and not queues[queue_name]:
        del queues[queue_name]
        logging.info(f"Queue '{queue_name}' deleted because it is empty.")


def add_message(queue_name, message):
    with lock:
        create_queue_if_not_exists(queue_name)
        queues[queue_name].append(message)
        logging.info(f"Message added to queue '{queue_name}'")


def get_next_message_from_queue(queue_name):
    if queue_name in queues and queues[queue_name]:
        message = queues[queue_name].pop(0)
        delete_queue_if_empty(queue_name)
        return message
    return None


def get_next_message(queue_name, timeout):
    start_time = time.time()
    while True:
        with lock:
            if queue_name in queues and queues[queue_name]:
                return get_next_message_from_queue(queue_name)
        
        if time.time() - start_time >= timeout:
            break
        
        time.sleep(0.1)
    return None


def get_queue_stats():
    with lock:
        return {queue_name: len(messages) for queue_name, messages in queues.items()}
