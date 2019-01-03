const axios = require('axios');

// function fetchQuestions(nbQuestion = 1, difficult = 'easy', typeQ = 'boolean') {
//   const showQ = axios.get(
//     `https://opentdb.com/api.php?amount=${nbQuestion}&difficulty=${difficult}&type=${typeQ}`
//   );
//   showQ.then(({ data: { results } }) => {
//     results.map(objQuestion => console.log(objQuestion.question));
//   });
// }

// fetchQuestions(3, 'hard', 'multiple');

/*------------------*/

function forwardGeocoding(adress, format) {
  const showAdress = axios.post(`https://geocode.xyz/`, {
    data: {
      locate: adress,
      geoit: format,
    },
  });
  showAdress
    .then(({ data, status }) => console.log(data))
    .catch(e => console.log('Il y a eu un problème : ' + e));
}

forwardGeocoding('415 C WEALTH AVE WEST Singapore', 'JSON');
