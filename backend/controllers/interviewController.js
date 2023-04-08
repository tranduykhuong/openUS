const catchAsync = require('../utils/catchAsync');
const Interview = require('../models/interviewModel');
const Data = require('../models/dataModel');
const axios = require('axios');
const { Configuration, OpenAIApi } = require("openai");
const FormData = require('form-data');

const config = {
  headers: {
      'api-key': 'bgLggHqMJye7VQ5wFzsjcuBgzOf3BmTq',
      speed: '0.5',
      voice: 'lannhi',
      'Content-Type': 'text/plain',
  },
};

const keywords = ['htmlp1 cơ bản', 'htmlp1', 'cssp1', 'javascriptp1', 'reactjsp2', 'debug', 'reactjsp1', 'responsive', 'test', 'problem']

const getQuestion = async (keyword) => {
  const form = new FormData();
  form.append('message',  keyword);

  const data = await axios.post(process.env.END_POINT_AI, form, {
    headers: form.getHeaders()
  })

  return data.data;
}

exports.createInterview = catchAsync(async (req, res, next) => {
  const doc = await Interview.find();

  const { field, majoy, position, idUser } = req.body;

  const question1 = await Data.findOne({question: 'Xin chào'}).lean();
  const question2 = await Data.findOne({question: 'Giới thiệu bản thân'}).lean();

  const inter = {
    idUser,
    score: "",
    reviews: [
      {
        question: "Bạn hãy giới thiệu về bản thân mình đi",
        answer: "",
        feedback: "",
        score: "",
        url: question2.urlVideo
      }
    ]
  }

  const data = await Interview.create(inter);

  res.status(200).json({
      status: 'success',
      data: {
        urlIntro: question1.urlVideo,
        urlVideo: question2.urlVideo,
        idQuestion: 1,
        idInterview: data._id
      },
  });
});

exports.createInterviewV2 = catchAsync(async (req, res, next) => {
    const doc = await Interview.find();

    const { field, majoy, position, idUser } = req.body;

    // Lay cau hoi
    const text = 'Xin chào. Đây là một buổi phỏng vấn cho vị trí Frontend Intern.';

    const payload = 'Xin chào. Đây là một buổi phỏng vấn cho vị trí Frontend Intern.';

    const response = await axios.post('https://api.fpt.ai/hmi/tts/v5', payload, config);

    axios
        .post('https://api.fpt.ai/hmi/tts/v5', payload, config)
        .then((response) => {
            console.log(response.data);

            
        })
        .catch((error) => {
            console.error(error);
        });

    const options = {
      method: 'POST',
      url: 'https://api.d-id.com/talks',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: 'Basic dHJhbmR1eWtodW9uZ2l0QGdtYWlsLmNvbQ:VOmIQUuGyPXdxOWUEY2HL'},
      data: {
        script: {
          type: 'text',
          provider: {
            type: 'microsoft',
            voice_id: 'Jenny',
            voice_config: {style: 'string', rate: '0.5', pitch: '+2st'}
          },
          ssml: true,
          input: 'This is an example text'
        },
        config: {
          fluent: true,
          pad_audio: 0,
          align_driver: true,
          align_expand_factor: 0,
          auto_match: true,
          motion_factor: 0,
          normalization_factor: 0,
          sharpen: true,
          stitch: true,
          result_format: 'mp4'
        },
        face: {top_left: [0, 0], size: 512},
        source_url: 'https://i1-kinhdoanh.vnecdn.net/2015/02/14/12-beth-1423907953.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=WQ_47Z4GAaOEKIhRueHgag',
        driver_url: 'bank://lively',
        user_data: 'string',
        name: 'string',
        webhook: 'https://host.domain.tld/to/webhook',
        result_url: 'https://drive.google.com/drive/folders/1sopTD4N1lcLCWmYhdx7NUCNoXpqzqEVj?usp=sharing/',
        persist: true
      }
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        res.status(200).json({
          status: 'success',
          data: response.data,
      });
      })
      .catch(function (error) {
        console.error(error.response);
        res.status(200).json({
          status: 'success',
          data: error,
      });
      });

    const option = {
      method: 'GET',
      url: 'https://api.d-id.com/talks/tlk_ViXFNldCvnnkPkKxm_wjO',
      headers: {
        accept: 'application/json',
        authorization: 'Basic dHJhbmR1eWtodW9uZ2l0QGdtYWlsLmNvbQ:VOmIQUuGyPXdxOWUEY2HL'
      }
    };

    axios
      .request(option)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    const responseDid = {
      data: {
        async: "https://file01.fpt.ai/text2speech-v5/short/2023-04-08/4258948e3f3a43cc8e59b17b3002000d.mp3"
      }
    }
    console.log(responseDid.data);

    const inter = {
      idUser,
      score: "",
      reviews: [
        {
          question: payload,
          answer: "",
          feedback: "",
          score: "",
          url: response.data.async
        }
      ]
    }

    const data = await Interview.create(inter);

    res.status(200).json({
        status: 'success',
        data,
    });
});

exports.answer = catchAsync(async (req, res, next) => {
  const { idQuestion, answer } = req.body;
  console.log(req.body);
  console.log(req.params.idInterview);

  const doc = await Interview.findOne({ _id: req.params.idInterview }).exec();
  const reviews = doc.reviews;

  // Tao cau hoi tiep theo
  let nextQue;
  let questionData;
  do {
    nextQue = await getQuestion(keywords[idQuestion - 1 > 0 ? idQuestion - 1 : 0]);
    // nextQue = 'Giới thiệu bản thân';
    questionData = await Data.findOne({question: nextQue}).lean();
    console.log(questionData);
  } while (!questionData)

  res.status(200).json({
    status: 'success',
    data: {
      question: nextQue,
      urlVideo: questionData.urlVideo,
      idQuestion: reviews.length + 1
    },
  });
  
  // Goi GPT lay feedback
  const decodedString = Buffer.from(process.env.OPENAI_API_KEY, 'base64').toString('utf-8');
  const question = doc.reviews[idQuestion - 1];
  
  const configuration = new Configuration({
    apiKey: decodedString,
  });
  const openai = new OpenAIApi(configuration);
  
  const responseGPT = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Cho câu hỏi: ${question}\nĐánh giá câu trả lời: ${answer}`,
    temperature: 0.9,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
  });
  // const responseGPT = {
  //   data: {
  //     choices: [
  //       {
  //         text: '\n' +
  //           '\n' +
  //           'Câu trả lời không trả lời được câu hỏi đã đưa ra. Props và state có sự khác biệt, vì thế, đáp án này là sai.',
  //         index: 0,
  //         logprobs: null,
  //         finish_reason: 'stop'
  //       }
  //     ]
  //   }
  // }

  reviews[idQuestion - 1].answer = answer;
  reviews[idQuestion - 1].feedback = responseGPT.data.choices[0].text;

  if (idQuestion < 3) {
    reviews.push({
      question: nextQue,
      answer: '',
      feedback: '',
      score: '',
      url: questionData.urlVideo
    });
  }

  const data = await Interview.findOneAndUpdate({ _id: doc._id }, { reviews: reviews }, {
    new: true,
    runValidators: true,
  });
  // console.log(data);
});

exports.getOne = catchAsync(async (req, res, next) => {
  const data = await Interview.findOne({ _id: req.params.idInterview }).exec();

  res.status(200).json({
      status: 'success',
      data: data,
  });
});