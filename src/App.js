import './App.css';
import Button from './components/Button';
import NewComponent from './components/NewComponent';
import Slider from './components/Slider';
import SquareToggle from './components/SquareToggle';
import InputText from './components/InputText';
import ShowMoreText from './components/ShowMoreTesxt';
import DropdownButton from './components/DropdownMenu';
import CardMain from './components/CardMain';
import TextBlocks from './components/TextBlocks';

function App() {
  const images = [
    'https://w.forfun.com/fetch/56/5656d35727009cabea6ce79973a9702c.jpeg',
    'https://www.1zoom.ru/big2/541/255095-Sepik.jpg',
    'https://gas-kvas.com/uploads/posts/2023-02/1675489758_gas-kvas-com-p-izobrazheniya-i-kartinki-na-fonovii-risuno-41.jpg',
  ];
  const texts = [
    'Это первый текст.',
    'Это второй текст.',
    'Это третий текст.',
  ];


  const subItems = ['Элемент 1', 'Элемент 2', 'Элемент 3'];
  return (
    <div className="App">
     <NewComponent/>
     <div className="focus">
     <Button/>
     </div>
     <div className="focus">
     <h1>Слайдер</h1>
      <Slider images={images} />
     </div>
     <div  className="focus"> 
      <h1>Квадраты</h1>
      <SquareToggle />
    </div>

    <div  className="focus"> 
    <InputText min="3" max="9"/>
    </div>

    <div  className="focus"> 
    <ShowMoreText text="Привет. Как дела? Что делаешь?"/>
    </div>

    <div  className="focus"> 
    <DropdownButton buttonText="Открыть" subItems={subItems} />
    </div>

    <div  className="focus"> 
    <CardMain/>
    </div>

    <div>
      <h1>Пример использования компонента TextBlocks</h1>
      <TextBlocks texts={texts} />
    </div>
    </div>
  );
}

export default App;
