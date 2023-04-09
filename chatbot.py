import random
import json
import pickle
import numpy as np
from flask import Flask, request, jsonify
import chatbot
import cv2
import base64
import io
import nltk
from nltk.stem import WordNetLemmatizer
app = Flask(__name__)
from tensorflow.keras.models import load_model

lenmatizer = WordNetLemmatizer()
intents = json.loads(open("intents.json", encoding='utf-8').read())

words = pickle.load(open('words.pkl','rb'))
classes = pickle.load(open('classes.pkl','rb'))
model = load_model('chatbot_model.model')

def clean_up_sentence(sentence) :
    sentence_words = nltk.word_tokenize(sentence)
    sentence_words =[lenmatizer.lemmatize(word) for word in sentence_words]
    return sentence_words

def bag_of_words(sentence) :
    sentence_word = clean_up_sentence(sentence)
    bag = [0]*len(words)
    for w in sentence_word :
        for i, word in enumerate(words):
            if word == w:
                bag[i] = 1
    return np.array(bag)

def predict_class(sentence) :
    bow = bag_of_words(sentence)
    print("sad",sentence)
    print(bow)
    res = model.predict(np.array([bow]))[0]

    ERROR_THRESHOLD = 0.25

    results  = [[i,r] for i, r in enumerate(res) if r>ERROR_THRESHOLD]

    results.sort(key=lambda  x: x[1], reverse=True)
    return_list= []

    for r in results :
        return_list.append({'intent':classes[r[0]],'probability':str(r[1])})
    return return_list

def get_response(intens_list, intent_json):
    tag = intens_list[0]['intent']
    list_of_intents = intent_json['intents']
    for i in list_of_intents:
        if i['tag'] ==tag:
            result = random.choice(i['responses'])
            break
    return result

#
# while True:
#     message = input("")
#     ints = predict_class(message)
#     print(ints)
#     res = get_response(ints, intents)
#     print(res)
# print("GOOOOOOOOOOOO")

@app.route('/submit', methods=['POST'])
def submit():
    message = request.form['message']

    # xử lý các giá trị vừa nhận được tại đây
    print(message)
    ints = chatbot.predict_class(message)
    res = chatbot.get_response(ints, intents)
    print(res)
    return res

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)