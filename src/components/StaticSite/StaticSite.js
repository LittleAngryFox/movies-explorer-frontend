import React from 'react';
import './index.css';
import mainImg from "./images/header-image.png";
import cardsAttention from "./images/cards-attention.png";
import cardsRecall from "./images/cards-recall.png";
import cardsInterliving from "./images/cards-interliving.png";
import cardsQuestion from "./images/cards-question.png";
import cardsCompetence from "./images/cards-competence.png";
import feynman from "./images/feynman.png";
import khanBook from "./images/khan-book.jpg";
import resourcesArzamas from "./images/resources-arzamas.svg";
import resourcesN from "./images/resources-n1.svg";
import resourcesStrelka from "./images/resources-strelka.svg";
import resourcesPolka from "./images/resources-polka.svg";
import facebook from "./images/facebook_color_white.svg";
import vk from "./images/vk_color_white.svg";
import instagram from "./images/instagram_color_white.svg";


function HowToLearn() {
  return (
    <div className="HTLpage">
      <header className="HTLheader">

        <div className="HTLlogo  HTLlogo_place_header"></div>

        <h1 className="HTLheader__title">Научиться учиться</h1>

        <p className="HTLheader__subtitle">Какие современные и эффективные подходы к обучению вы можете использовать в своей
  жизни? <a className="HTLheader__link" href='#1'>Узнать &rarr;</a></p>

        <img src={mainImg} alt="Основное изображение" className="HTLheader__main-illustration" />

        <div className="HTLheader__square-pic HTLrotation"></div>
      </header>

      <main className="HTLcontent">

        <section className="HTLdescription" id="1">
          <div className="HTLtwo-columns">

            <h2 className="HTLtwo-columns__brief">Главные проблемы в обучении</h2>

            <div className="HTLtwo-columns__main-text">
              <p className="HTLtwo-columns__paragraph">Ни в школе, ни в институте нас не учат тому, как правильно изучать
              материал. Мы готовимся к экзаменам и
              учим билеты. Мы тренируемся решать однообразные задачи, чтобы лучше сдать тест, но часто в итоге это не
              дает
        нам реального знания. Зубрежка быстро выветривается и не приносит пользы.</p>
              <p className="HTLtwo-columns__paragraph"><span className="HTLtwo-columns__span-accent">Вывод:</span> учиться
        тоже нужно уметь, но почему-то этому мало где учат. Что с этим делать?</p>
              <p className="HTLtwo-columns__paragraph">Конкретные техники и упражнения помогают изменить подход к обучению,
              сделать его эффективным и
        захватывающим. Эти же техники применяются на примере обучения в Практикуме.</p>
            </div>

          </div>
        </section>

        <section className="HTLtechniques">

          <h2 className="HTLsection-title">Техники обучения</h2>
          <p className="HTLsection-subtitle">Пять практик от Барбары Оакли</p>

          <ul className="HTLcards">

            <li className="HTLcards__item">
              <img src={cardsAttention} alt="Виды внимания" className="HTLcards__image" />
              <h3 className="HTLcards__title">Два вида внимания</h3>
              <p className="HTLcards__description">Глубокие знания возникают, если чередовать сфокусированное и рассеянное мышление.</p>
            </li>

            <li className="HTLcards__item">
              <img src={cardsRecall} alt="Повторения" className="HTLcards__image" />
              <h3 className="HTLcards__title">Recall</h3>
              <p className="HTLcards__description">Вспоминайте изученное — это позволит соединить разрозненные порции памяти.</p>
            </li>

            <li className="HTLcards__item">
              <img src={cardsInterliving} alt="Интерливинг" className="HTLcards__image" />
              <h3 className="HTLcards__title">Интерливинг</h3>
              <p className="HTLcards__description">Изучайте несколько навыков одновременно, они обогащают друг друга.</p>
            </li>

            <li className="HTLcards__item">
              <img src={cardsQuestion} alt="Вопросы" className="HTLcards__image" />
              <h3 className="HTLcards__title">Вопросы</h3>
              <p className="HTLcards__description">Слушая преподавателя, придумывайте хороший вопрос, который вас действительно волнует.</p>
            </li>

            <li className="HTLcards__item">
              <img src={cardsCompetence} alt="Компетентность" className="HTLcards__image" />
              <h3 className="HTLcards__title">Иллюзия компетентности</h3>
              <p className="HTLcards__description">Повторите про себя, запишите, расскажите другу: вам только кажется, что вы владеете новой темой.</p>
            </li>

          </ul>

        </section>

        <section className="HTLvideo">
          <h2 className="HTLsection-title">Видео нa TED</h2>
          <p className="HTLsection-subtitle">Для тех, кто любит прокрастинировать</p>

          <div className="HTLvideo__iframes">
            <iframe className="HTLvideo__iframe" title="master procrastinator" src="https://www.youtube.com/embed/arj7oStGLkU" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe className="HTLvideo__iframe" title="how to learn anything" src="https://www.youtube.com/embed/5MgBikgcWnY" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

        </section>

        <section className="HTLoakley">
          <div className="HTLtwo-columns">

            <h2 className="HTLtwo-columns__brief">История Барбары Оакли.</h2>

            <div className="HTLtwo-columns__main-text">
              <p className="HTLtwo-columns__paragraph">С детства Барбаре не давалась математика. Она считала себя законченным гуманитарием, причём далеко не самым умным. В армии она изучала русский язык, чтобы получить надбавку, да так успешно, что её выдвинули в командиры. Но для продвижения по службе нужно было сдавать математику. И тогда Барбара придумала свой подход к точным наукам. Оказалось, если вам что-то «плохо даётся», ваши добытые трудом знания гораздо глубже, чем у тех, кому всё ясно с первого взгляда.</p>
            </div>

          </div>
        </section>

        <section className="HTLfeinman">
          <h2 className="HTLfeinman__title">Метод Фейнмана</h2>
          <p className="HTLfeinman__subtitle">Выучить и не забыть.</p>
          <img src={feynman} alt="Фейнман" className="HTLfeinman__image" />
          <a className='HTLfeinman__link' href="#2">Подробнее &rarr;</a>
        </section>

        <section className="HTLdigits" id="2">

          <h2 className="HTLsection-title">Цифры и факты</h2>
          <p className="HTLsection-subtitle">Про учёбу и мозг</p>

          <ul className="HTLtable">
            <li className="HTLtable__cell">
              <h3 className="HTLtable__heading">85 миллиардов</h3>
              <p className="HTLtable__text">Число нейронов в мозге человека</p>
            </li>
            <li className="HTLtable__cell">
              <h3 className="HTLtable__heading">2.1 миллиарда</h3>
              <p className="HTLtable__text">Число нуждающихся в повышении квалификации</p>
              <p className="HTLtable__text">Всемирный Банк, 2017</p>
            </li>
            <li className="HTLtable__cell">
              <h3 className="HTLtable__heading">1000 терабайт</h3>
              <p className="HTLtable__text">Объем памяти человека</p>
            </li>
            <li className="HTLtable__cell">
              <h3 className="HTLtable__heading">500 триллионов</h3>
              <p className="HTLtable__text">Число ответственных за обучение нервных синапсов у взрослого человека</p>
            </li>
            <li className="HTLtable__cell">
              <h3 className="HTLtable__heading">420 миллионов</h3>
              <p className="HTLtable__text">Число взрослых людей моложе 25 лет, не имеющих образования для трудоустройства
      </p>
              <p className="HTLtable__text">Всемирный Банк, 2017</p>
            </li>
            <li className="HTLtable__cell">
              <h3 className="HTLtable__heading">17-20 лет</h3>
              <p className="HTLtable__text">Пик обучаемости</p>
            </li>
            <li className="HTLtable__cell">
              <h3 className="HTLtable__heading">1885 год</h3>
              <p className="HTLtable__text">Открытие кривой забывания</p>
            </li>
            <li className="HTLtable__cell">
              <h3 className="HTLtable__heading">1889 год</h3>
              <p className="HTLtable__text">Открытие условного рефлекса</p>
            </li>
          </ul>

        </section>

        <section className="HTLkhan" id="3">
          <div className="HTLkhan__container">
            <p className="HTLkhan__author">Салман Хан</p>
            <h2 className="HTLkhan__title">Весь мир — школа</h2>
            <blockquote className="HTLkhan__quote">Страсть и новаторство Сала Хана меняют процесс обучения миллионов студентов по всему миру. Книгу «Весь мир — школа» нужно прочитать всем, кто занимается образованием — так учащиеся повсюду смогут получить навыки и знания, которые приносят успех в школе, карьере и жизни.</blockquote>
            <p className="HTLkhan__quote-author">Джордж Лукас</p>
            <p className="HTLkhan__quote-author-subline">Кинорежиссер, продюсер</p>
            <div className="HTLkhan__book-container">
              <img className="HTLkhan__book-pic" src={khanBook} alt="Книга Хана" />
              <a className="HTLkhan__buy-link" href="#3">Купить книгу &rarr;</a>
            </div>
          </div>
        </section>

        <section className="HTLkaufman">
          <h2 className="HTLsection-title HTLsection-title_theme_dark">Принципы обучения</h2>
          <p className="HTLsection-subtitle HTLsection-subtitle_theme_dark">от Джоша Кауфмана</p>

          <ul className="HTLtable HTLtable_theme_dark">
            <li className="HTLtable__cell HTLtable__cell_theme_dark">
              <h3 className="HTLtable__heading HTLtable__heading_theme_dark">1</h3>
              <p className="HTLtable__text HTLtable__text_theme_dark">Выберите привлекательный проект.</p>
            </li>
            <li className="HTLtable__cell HTLtable__cell_theme_dark">
              <h3 className="HTLtable__heading HTLtable__heading_theme_dark">2</h3>
              <p className="HTLtable__text HTLtable__text_theme_dark">Сосредоточьтесь на каком-то одном навыке.</p>
            </li>
            <li className="HTLtable__cell HTLtable__cell_theme_dark">
              <h3 className="HTLtable__heading HTLtable__heading_theme_dark">3</h3>
              <p className="HTLtable__text HTLtable__text_theme_dark">Определите целевой уровень сатерства.</p>
            </li>
            <li className="HTLtable__cell HTLtable__cell_theme_dark">
              <h3 className="HTLtable__heading HTLtable__heading_theme_dark">4</h3>
              <p className="HTLtable__text HTLtable__text_theme_dark">Разбейте навык на элементы.</p>
            </li>
            <li className="HTLtable__cell HTLtable__cell_theme_dark">
              <h3 className="HTLtable__heading HTLtable__heading_theme_dark">5</h3>
              <p className="HTLtable__text HTLtable__text_theme_dark">Приготовьте всё необходимое для занятий.</p>
            </li>
            <li className="HTLtable__cell HTLtable__cell_theme_dark">
              <h3 className="HTLtable__heading HTLtable__heading_theme_dark">6</h3>
              <p className="HTLtable__text HTLtable__text_theme_dark">Устраните препятствия для занятий.</p>
            </li>
            <li className="HTLtable__cell HTLtable__cell_theme_dark">
              <h3 className="HTLtable__heading HTLtable__heading_theme_dark">7</h3>
              <p className="HTLtable__text HTLtable__text_theme_dark">Выделите специальное время для занятий.</p>
            </li>
            <li className="HTLtable__cell HTLtable__cell_theme_dark">
              <h3 className="HTLtable__heading HTLtable__heading_theme_dark">8</h3>
              <p className="HTLtable__text HTLtable__text_theme_dark">Создайте быстрые петли обратной связи.</p>
            </li>
            <li className="HTLtable__cell HTLtable__cell_theme_dark">
              <h3 className="HTLtable__heading HTLtable__heading_theme_dark">9</h3>
              <p className="HTLtable__text HTLtable__text_theme_dark">Занимайтесь по расписанию, короткими интенсивными интервалами.
      </p>
            </li>
            <li className="HTLtable__cell HTLtable__cell_theme_dark">
              <h3 className="HTLtable__heading HTLtable__heading_theme_dark">10</h3>
              <p className="HTLtable__text HTLtable__text_theme_dark">Уделяйте внимание количеству и скорости.</p>
            </li>
          </ul>

          <div className="HTLkaufman__triangle HTLrotation"></div>
        </section>

        <section className="HTLresources">
          <h2 className="HTLsection-title">Полезные ресурсы</h2>
          <p className="HTLsection-subtitle">Больше материалов о техниках и лайфхаках обучения</p>

          <ul className="HTLresources__logo-zone">
            <li className="HTLresources__logo" id="4"><a href="#4"><img className="HTLresources__logo" src={resourcesArzamas} alt="Арзамас" /></a></li>
            <li className="HTLresources__logo" id="5"><a href="#5"><img className="HTLresources__logo" src={resourcesN} alt="Н1" /></a></li>
            <li className="HTLresources__logo" id="6"><a href="#6"><img className="HTLresources__logo" src={resourcesStrelka} alt="Стрелка" /></a></li>
            <li className="HTLresources__logo" id="7"><a href="#7"><img className="HTLresources__logo" src={resourcesPolka} alt="Полка" /></a></li>
          </ul>
        </section>
      </main>

      <footer className="HTLfooter">

        <div className="HTLfooter__columns">

          <div className="HTLfooter__column HTLfooter__column_content_copyright">
            <div className="HTLlogo HTLlogo_place_footer"></div>
            <p className="HTLfooter__author">&copy; 2020. Ильина Елена</p>
          </div>

          <nav className="HTLfooter__column HTLfooter__column_content_info">
            <p className="HTLfooter__column-heading">О Практикуме</p>

            <ul className="HTLfooter__column-links">
              <li className="HTLfooter__link" id="8"><a className="HTLfooter__link" href="#8">Главная</a></li>
              <li className="HTLfooter__link" id="9"><a className="HTLfooter__link" href="#9">Концепция</a></li>
              <li className="HTLfooter__link" id="10"><a className="HTLfooter__link" href="#10">Наставники</a></li>
            </ul>
          </nav>

          <div className="HTLfooter__column HTLfooter__column_content_social ">
            <p className="HTLfooter__column-heading">Соцсети</p>

            <ul className="HTLfooter__column-links">
              <li className="HTLfooter__link" id="11"><a className="HTLfooter__link" href="#11">
                <img src={facebook} alt="Социальная сеть Facebook"
                  className="HTLfooter__social-icon" />Facebook</a>
              </li>
              <li className="HTLfooter__link" id="12"><a className="HTLfooter__link" href="#12">
                <img src={vk} alt="Социальная сеть Вконтакте"
                  className="HTLfooter__social-icon" />ВКонтакте</a></li>
              <li className="HTLfooter__link" id="13"><a className="HTLfooter__link" href="#13">
                <img src={instagram} alt="Социальная сеть Instagram"
                  className="HTLfooter__social-icon" />Instagram</a>
              </li>
            </ul>

          </div>
        </div>
      </footer>
    </div>
  );
}

export default HowToLearn;