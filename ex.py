import requests

def get_node_info():
    url = "http://localhost:4411/link_info"
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise exception for 4XX/5XX responses
        return response.json()  # Assume the response is JSON
    except requests.exceptions.RequestException as e:
        print(f"Error fetching node info: {e}")
        return None

if __name__ == "__main__":
    node_info = get_node_info()
    if node_info:
        print("Node Info:")
        print(node_info)