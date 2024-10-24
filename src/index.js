import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import TextField from './Forms/TextField';
// import Fruitt from './Fruits/Fruit.jsx';
// import Conunter from './Counter/Counter.jsx';
// import Event from './Event/Event.jsx';
// import JeuDe from './jeuDe/jeuDe.jsx';
// import Message from './ecxecice_controle_1/Message.jsx';
// import Counter from './ecxecice_controle_1/Counter.jsx';
// import Hooks from './hooks useState/hooks_useState.jsx';
// import Form from './Forms/Form.jsx';
// import FormValidation from './form_validation/FormValidation';
// import Inscription from './tp8/ex1.jsx';
// import Validator from './tp8/ex2.jsx';
// import App from './tp8/ex3';
// import AppCompteur from './tp8/AppCompteur';
// import App from './contrel1/co1/App';
// import App from './contrel1/co1_203/tasks';
import Sacs from './contrel1/co1_203/Sacs';

const root = ReactDOM.createRoot(document.getElementById('root'));
const fruitArray = [
    'Strawberry',
    'Lemon',
    'Orange',
    'Apple'
];

root.render(
  <React.StrictMode>

    <Sacs/>

    {/* <AppCompteur/> */}

    {/* <App/> */}
                      
    {/* <Inscription/> */}

    {/* <Validator/> */}

    {/* <Fruitt fruits={fruitArray} /> */}

    {/* <App /> */}
    
    {/* <TextField inputName='lastName' inputlabel='last name'/>
    <TextField inputName='firstName' inputlabel='firstName'>
      je suis yahya essehymy
    </TextField>  */}

    {/* <Conunter/> */}
  
   {/* <Event/> */}

   {/* <JeuDe cache={2} /> */}

   {/* <Message name="yahya essehymy" /> {/* تمرير اسم */}
   {/* <Message />  */} 

   {/* <Counter initialCount={10} />  تمرير قيمة البداية */}
   {/* <Counter />  استخدام القيمة الافتراضية */}

   {/* <Hooks initial={2} step={5} /> */}

   {/* <Form/> */}


   {/* <FormValidation/> */}

  </React.StrictMode>
);

reportWebVitals();
