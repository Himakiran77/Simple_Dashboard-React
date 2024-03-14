
from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['Jason_Database']  
collection = db['Data']  

@app.route('/api/data', methods=['GET'])
def fetch_data():

    intensity = request.args.getlist('intensity')
    likelihood = request.args.getlist('likelihood')
    relevance = request.args.getlist('relevance')
    topics = request.args.getlist('topics')
    country = request.args.getlist('country')
    region = request.args.getlist('region')

    
    query = {}

    if intensity:
        query['intensity'] = int(intensity[0])

    if likelihood:
        query['likelihood'] = int(likelihood[0])

    if relevance:
        query['relevance'] = int(relevance[0])

    if topics:
        query['topic'] = {'$in': topics}

    if country:
        query['country'] = {'$in': country}

    if region:
        query['region'] = {'$in': region}

    
    data = list(collection.find(query))

    
    processed_data = process_data_for_visualizations(data)

    return jsonify(processed_data)


def process_data_for_visualizations(data):
    
    processed_data = []
    for item in data:
        processed_data.append({
            'intensity': item['intensity'],
            'likelihood': item['likelihood'],
            'relevance': item['relevance'],
            'topic': item['topic'],
            'country': item['country'],
            'region': item['region']
        })
    return processed_data

if __name__ == '__main__':
    app.run(debug=True)
