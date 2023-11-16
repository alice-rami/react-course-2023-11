import ReactDOM from 'react-dom/client';
import { restaurants } from './constants/mock';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <ul>
    <li>
      <h2>{restaurants[0].name}</h2>
      <h3>Меню</h3>
      <ul>
        <li>{restaurants[0].menu[0].name}</li>
        <li>{restaurants[0].menu[1].name}</li>
        <li>{restaurants[0].menu[2].name}</li>
      </ul>
      <h3>Отзывы</h3>
      <ul>
        <li>{restaurants[0].reviews[0].text}</li>
        <li>{restaurants[0].reviews[1].text}</li>
      </ul>
    </li>

    <li>
      <h2>{restaurants[1].name}</h2>
      <h3>Меню</h3>
      <ul>
        <li>{restaurants[1].menu[0].name}</li>
        <li>{restaurants[1].menu[1].name}</li>
      </ul>
      <h3>Отзывы</h3>
      <ul>
        <li>{restaurants[1].reviews[0].text}</li>
        <li>{restaurants[1].reviews[1].text}</li>
        <li>{restaurants[1].reviews[2].text}</li>
      </ul>
    </li>

    <li>
      <h2>{restaurants[2].name}</h2>
      <h3>Меню</h3>
      <ul>
        <li>{restaurants[2].menu[0].name}</li>
        <li>{restaurants[2].menu[1].name}</li>
        <li>{restaurants[2].menu[2].name}</li>
      </ul>
      <h3>Отзывы</h3>
      <ul>
        <li>{restaurants[2].reviews[0].text}</li>
      </ul>
    </li>

    <li>
      <h2>{restaurants[3].name}</h2>
      <h3>Меню</h3>
      <ul>
        <li>{restaurants[3].menu[0].name}</li>
        <li>{restaurants[3].menu[1].name}</li>
      </ul>
      <h3>Отзывы</h3>
      <ul>
        <li>{restaurants[3].reviews[0].text}</li>
        <li>{restaurants[3].reviews[1].text}</li>
      </ul>
    </li>
  </ul>
);

// root.render(
//   React.createElement('ul', {
//     children: [
//       React.createElement('li', {
//         key: 0,
//         children: [
//           React.createElement('h2', {
//             children: restaurants[0].name,
//           }),
//           React.createElement('h3', {
//             children: 'Меню',
//           }),
//           React.createElement('ul', {
//             children: [
//               React.createElement('li', {
//                 key: '0m0',
//                 children: restaurants[0].menu[0].name,
//               }),
//               React.createElement('li', {
//                 key: '0m1',
//                 children: restaurants[0].menu[1].name,
//               }),
//               React.createElement('li', {
//                 key: '0m2',
//                 children: restaurants[0].menu[2].name,
//               }),
//             ],
//           }),
//           React.createElement('h3', {
//             children: 'Отзывы',
//           }),
//           React.createElement('ul', {
//             children: [
//               React.createElement('li', {
//                 key: '0r0',
//                 children: restaurants[0].reviews[0].text,
//               }),
//               React.createElement('li', {
//                 key: '0r1',
//                 children: restaurants[0].reviews[1].text,
//               }),
//             ],
//           }),
//         ],
//       }),

//       React.createElement('li', {
//         key: 1,
//         children: [
//           React.createElement('h2', {
//             children: restaurants[1].name,
//           }),
//           React.createElement('h3', {
//             children: 'Меню',
//           }),
//           React.createElement('ul', {
//             children: [
//               React.createElement('li', {
//                 key: '1m0',
//                 children: restaurants[1].menu[0].name,
//               }),
//               React.createElement('li', {
//                 key: '1m1',
//                 children: restaurants[1].menu[1].name,
//               }),
//             ],
//           }),
//           React.createElement('h3', {
//             children: 'Отзывы',
//           }),
//           React.createElement('ul', {
//             children: [
//               React.createElement('li', {
//                 key: '1r0',
//                 children: restaurants[1].reviews[0].text,
//               }),
//               React.createElement('li', {
//                 key: '1r1',
//                 children: restaurants[1].reviews[1].text,
//               }),
//               React.createElement('li', {
//                 key: '1r2',
//                 children: restaurants[1].reviews[2].text,
//               }),
//             ],
//           }),
//         ],
//       }),

//       React.createElement('li', {
//         key: 2,
//         children: [
//           React.createElement('h2', {
//             children: restaurants[2].name,
//           }),
//           React.createElement('h3', {
//             children: 'Меню',
//           }),
//           React.createElement('ul', {
//             children: [
//               React.createElement('li', {
//                 key: '2m0',
//                 children: restaurants[2].menu[0].name,
//               }),
//               React.createElement('li', {
//                 key: '2m1',
//                 children: restaurants[2].menu[1].name,
//               }),
//               React.createElement('li', {
//                 key: '2m2',
//                 children: restaurants[2].menu[2].name,
//               }),
//             ],
//           }),
//           React.createElement('h3', {
//             children: 'Отзывы',
//           }),
//           React.createElement('ul', {
//             children: [
//               React.createElement('li', {
//                 key: '2r0',
//                 children: restaurants[2].reviews[0].text,
//               }),
//             ],
//           }),
//         ],
//       }),

//       React.createElement('li', {
//         key: 3,
//         children: [
//           React.createElement('h2', {
//             children: restaurants[3].name,
//           }),
//           React.createElement('h3', {
//             children: 'Меню',
//           }),
//           React.createElement('ul', {
//             children: [
//               React.createElement('li', {
//                 key: '3m0',
//                 children: restaurants[3].menu[0].name,
//               }),
//               React.createElement('li', {
//                 key: '3m1',
//                 children: restaurants[3].menu[1].name,
//               }),
//             ],
//           }),
//           React.createElement('h3', {
//             children: 'Отзывы',
//           }),
//           React.createElement('ul', {
//             children: [
//               React.createElement('li', {
//                 key: '3r0',
//                 children: restaurants[3].reviews[0].text,
//               }),
//               React.createElement('li', {
//                 key: '3r1',
//                 children: restaurants[3].reviews[1].text,
//               }),
//             ],
//           }),
//         ],
//       }),
//     ],
//   })
// );
