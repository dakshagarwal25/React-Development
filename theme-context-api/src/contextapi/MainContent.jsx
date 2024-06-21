// import React, { useContext, useState } from 'react';
// import { ThemeContext } from './ThemeContext';

// const MainContent = () => {
//   const { bgColor, fontColor, changeTheme } = useContext(ThemeContext);
//   const [newBgColor, setNewBgColor] = useState(bgColor);
//   const [newFontColor, setNewFontColor] = useState(fontColor);

//   const handleBgColorChange = (e) => {
//     setNewBgColor(e.target.value);
//   };

//   const handleFontColorChange = (e) => {
//     setNewFontColor(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     changeTheme(newBgColor, newFontColor);
//   };

//   const style = {
//     backgroundColor: bgColor,
//     color: fontColor,
//     padding: '20px',
//     borderRadius: '5px',
//   };

//   return (
//     <div>
//       <div style={style}>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam ratione amet dolores, facere vitae, perspiciatis ducimus illum voluptate consequatur ipsam doloribus at sapiente consequuntur, odio ipsum laborum! Similique, rem recusandae. Ipsum quidem saepe ipsam hic voluptas laboriosam fugit debitis distinctio possimus similique aperiam sequi odio magnam porro, suscipit doloremque id perferendis, nisi corporis. Odio porro sapiente quisquam quae provident iste blanditiis! Qui, laborum eum. Aperiam debitis veritatis rerum velit autem. Rerum error modi cumque magni! Illum quaerat officiis accusamus ad aperiam culpa quia, consequuntur nam sapiente saepe ipsa quod dolores, in, nisi doloribus. Ab temporibus voluptate amet ex sit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt omnis nihil quasi molestiae error, nostrum, optio quidem voluptatum ex nulla dolorem totam animi ullam fuga eum in eligendi, neque tempore obcaecati expedita corrupti fugiat alias! Alias adipisci magnam officia dicta deleniti molestiae quam tempora veniam quia aperiam ex cupiditate perferendis sed ipsa nisi tenetur eligendi laborum, consequuntur voluptates dignissimos illo eveniet harum aliquam. Eum magni velit quo doloribus soluta, ducimus repellat explicabo neque iusto, dolore asperiores quisquam iste quibusdam. Perferendis, illum labore! Unde placeat numquam ad alias quis iste. Soluta tempora obcaecati voluptate, suscipit similique culpa beatae temporibus illum cumque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos veniam ratione temporibus? Reprehenderit modi nostrum exercitationem odio nemo nulla enim ratione ipsum qui quam deleniti, commodi atque excepturi necessitatibus, itaque ut mollitia distinctio maiores nobis eius tenetur, voluptatum possimus vero. Sed, asperiores laudantium aperiam cupiditate repellendus quisquam! Sed sint cum iure assumenda accusantium veniam rerum magnam quae, modi ullam. Incidunt velit officia reprehenderit perferendis aspernatur mollitia laudantium impedit illo, commodi unde? Quia, et? Rem provident reiciendis quia iste dolorum nostrum, possimus, accusantium aliquid neque dolore sequi minus molestiae repellat culpa delectus in sint aperiam dolorem ipsum! Odio consectetur dicta at!</p>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Select background color
//           <input type="color" value={newBgColor} onChange={handleBgColorChange} />
//         </label>
//         <br />
//         <label>
//           Select font color
//           <input type="color" value={newFontColor} onChange={handleFontColorChange} />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default MainContent;

import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const MainContent = ({ bgColor, fontColor }) => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  const style = {
    backgroundColor: bgColor,
    color: fontColor,
    padding: '20px',
    borderRadius: '5px',
  };

  return (
    <div style={style}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam ratione amet dolores, facere vitae, perspiciatis ducimus illum voluptate consequatur ipsam doloribus at sapiente consequuntur, odio ipsum laborum! Similique, rem recusandae. Ipsum quidem saepe ipsam hic voluptas laboriosam fugit debitis distinctio possimus similique aperiam sequi odio magnam porro, suscipit doloremque id perferendis, nisi corporis. Odio porro sapiente quisquam quae provident iste blanditiis! Qui, laborum eum. Aperiam debitis veritatis rerum velit autem. Rerum error modi cumque magni! Illum quaerat officiis accusamus ad aperiam culpa quia, consequuntur nam sapiente saepe ipsa quod dolores, in, nisi doloribus. Ab temporibus voluptate amet ex sit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nobis molestias magni doloremque qui quam quos reiciendis laborum nulla sunt, dignissimos obcaecati expedita officiis fugiat eos ut labore consequuntur repellat placeat architecto id praesentium laudantium. Laboriosam excepturi tempora accusantium quam, sapiente quaerat optio cumque, magni magnam ullam dolor? Necessitatibus, asperiores, molestiae sit iure laborum magni voluptates id, totam voluptatum rerum cumque deserunt cupiditate praesentium molestias dolor ullam aliquid beatae nisi provident. Optio possimus facere, culpa a eveniet praesentium explicabo dolores libero, corporis sint qui sapiente tempora cum aut ipsam corrupti? Quasi eligendi deserunt voluptatem nesciunt laboriosam a, quis, illum natus dolore autem, nihil hic tempore excepturi ex aspernatur harum unde optio veritatis voluptatum doloribus! Est quo sapiente ex adipisci non optio nulla unde error iste ut delectus eius voluptatibus laborum quos ipsa eaque cumque, minus voluptates id voluptatem asperiores? Voluptatem doloremque nesciunt, ipsa tenetur necessitatibus voluptas qui voluptatibus laboriosam at optio, maxime saepe officiis corporis libero aliquid. Quibusdam odio suscipit maxime nesciunt laudantium eligendi commodi! Consequatur obcaecati optio voluptas accusantium, sint necessitatibus explicabo provident, hic consectetur harum itaque. Neque quae esse libero officiis assumenda enim veritatis quia iusto! Nobis maiores cum modi velit eligendi voluptas fugit labore ullam voluptatem itaque?</p>
    </div>
  );
};

export default MainContent;
