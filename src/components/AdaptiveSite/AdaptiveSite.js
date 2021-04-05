import React from 'react';
import './index.css';
import logo from "./images/header-logo.svg"
import leadPolka from "./images/lead-polka.png"
import photoGridTrain from "./images/photo-grid-train.jpg"
import photoGridAtharvaTulsi from "./images/photo-grid-atharva-tulsi.jpg"
import photoGridTuman from "./images/photo-grid-tuman.jpg"
import photoGridSochi from "./images/photo-grid-sochi.jpg"
import photoGridArisa from "./images/photo-grid-arisa.jpg"
import photoGridBaikal from "./images/photo-grid-baikal.jpg"
import photoGrideElbrus from "./images/photo-grid-elbrus.jpg"
import photoGrideKondratiev from "./images/photo-grid-kondratiev.jpg"
import photoGrideKamchatka from "./images/photo-grid-kamchatka-1.jpg"
import photoGrideKamchatkaTwo from "./images/photo-grid-kamchatka-2.jpg"
import photoGridBaikalTwo from "./images/photo-grid-baikal-2.jpg"
import photoGridErgaki from "./images/photo-grid-ergaki.jpg"
import placeKosa from "./images/place-kosa.jpg"
import placeKolsky from "./images/place-kolsky.jpg"
import placeAltai from "./images/place-altai.jpg"
import placeWinterBaikal from "./images/place-winter-baikal.jpg"
import placeKarelia from "./images/place-karelia.jpg"


function RussianTravel() {
  return (
    <div className="RTpage">

      <header className="RTheader">
        <img className="RTheader__logo" alt="Черно-белый логотип мини-карта России" src={logo} />
        <ul className="RTheader__lang-links">
          <li className="RTheader__lang-list" id="1"><a className="RTheader__lang-link RTheader__lang-link_check" href="#1">Ru</a></li>
          <li className="RTheader__lang-list" id="2"><a className="RTheader__lang-link" href="#2">En</a></li>
        </ul>
      </header>

      <main className="RTcontent">
        <section className="RTlead">
          <h1 className="RTlead__title">Путешествия по России</h1>
          <p className="RTlead__subtitle">Настоящая страна не в выпусках новостей, а здесь.</p>
          <figure className="RTlead__images">
            <img className="RTlead__image" alt="Девушка лежит на верхней полке в поезде" src={leadPolka} />
            <figcaption className="RTlead__caption">Ваша полка - верхняя</figcaption>
          </figure>
        </section>

        <section className="RTintro">
          <h2 className="RTintro__title">Чего мы там не видели?</h2>
          <p className="RTintro__text">По опросам ВЦИОМ, 95% россиян мечтают куда-нибудь поехать, но только 36% планируют
          провести отпуск в родной стране. Мол, чего мы тут, дома, не видели? На самом деле, Россия — это целая
          вселенная с ласковым морем юга, густыми лесами Саян и суровыми льдами плато Путорана. А ещё увидеть все эти
          красоты можно без миллионов на счету, загранпаспорта и многочасовых перелетов. Как, например, Вера Башмакова —
          смелая молодая мама, которая взяла в охапку троих детей, усадила их в свою «Ладу» и проехала 20 тысяч
          километров по родной стране. Мы выбрали и описали некоторые интересные места, достойные вашего отпуска.</p>

          <ul className="RTintro__lists">
            <li className="RTintro__list">Часовых поясов <span className="RTintro__span-accent">11</span></li>
            <li className="RTintro__list">Объектов природного наследия ЮНЕСКО <span className="RTintro__span-accent">12</span></li>
            <li className="RTintro__list">Объектов культурного наследия ЮНЕСКО <span className="RTintro__span-accent">16</span></li>
            <li className="RTintro__list">Природных заповедников <span className="RTintro__span-accent">105</span></li>
            <li className="RTintro__list">Аэропортов <span className="RTintro__span-accent">241</span></li>
          </ul>
        </section>

        <section className="RTphoto-grid">
          <ul className="RTphoto-grid__list">
            <li className="RTphoto-grid__item"><img className="RTphoto-grid__item-img" alt="Вид из окна поезда"
              src={photoGridTrain} /></li>
            <li className="RTphoto-grid__item"><img className="RTphoto-grid__item-img" alt="Вид на горы Атхарва"
              src={photoGridAtharvaTulsi} /></li>
            <li className="RTphoto-grid__item"><img className="RTphoto-grid__item-img" alt="Собака на сене в туманное утро"
              src={photoGridTuman} /></li>
            <li className="RTphoto-grid__item"><img className="RTphoto-grid__item-img" alt="Вид на туманный лес в Сочи" src={photoGridSochi} />
            </li>
            <li className="RTphoto-grid__item"><img className="RTphoto-grid__item-img" alt="Машина на льду реки Ареса"
              src={photoGridArisa} /></li>
            <li className="RTphoto-grid__item"><img className="RTphoto-grid__item-img" alt="Вид на пляж озера Байкал"
              src={photoGridBaikal} /></li>
            <li className="RTphoto-grid__item"><img className="RTphoto-grid__item-img" alt="Эльбрус"
              src={photoGrideElbrus} /></li>
            <li className="RTphoto-grid__item"><img className="RTphoto-grid__item-img" alt="Фото знака пешеходного перехода на фоне строительных блоков"
              src={photoGrideKondratiev} /></li>
            <li className="RTphoto-grid__item"><img className="RTphoto-grid__item-img" alt="Горный вид на просторы Камчатки"
              src={photoGrideKamchatka} /></li>
            <li className="RTphoto-grid__item"><img className="RTphoto-grid__item-img" alt="Вид на горы Камчатки"
              src={photoGrideKamchatkaTwo} /></li>
            <li className="RTphoto-grid__item"><img className="RTphoto-grid__item-img" alt="Вид на озеро Байкал с горами"
              src={photoGridBaikalTwo} /></li>
            <li className="RTphoto-grid__item"><img className="RTphoto-grid__item-img" alt="Вид на туманный Ергаки"
              src={photoGridErgaki} /></li>
          </ul>
        </section>

        <section className="RTplaces">
          <article className="RTplace">
            <h2 className="RTplace__title">Куршская коса</h2>
            <div className="RTplace__website">
              <abbr className="RTplace__website__url-heading" title="Uniform Resource Locator">Url</abbr><a
                className="RTplace__website__link" href="http://park-kosa.ru" target="_blank" rel="noreferrer">park-kosa.ru</a>
            </div>
            <img className="RTplace__image" alt="Побережье Куршской косы" src={placeKosa} />
            <div className="RTplace__text">
              <p className="RTplace__paragraph">Здесь, посреди лесов и песчаных дюн, вы сможете увидеть два водных горизонта —
              спокойного Куршского залива с одной стороны и подёрнутого рябью волн Балтийского моря с другой. Уникальная
              природная зона на краю российского анклава.</p>
              <p className="RTplace__paragraph">На этом Калининградская область не заканчивается. Для путешественника и
              исследователя там же по соседству — самая западная точка России, Балтийская коса, — и немецкое наследие
              россыпи небольших приморских городов. Атмосфера здешних мест исключает суету, окуная в спокойствие природы
              и запах стального, прохладного моря.</p>
            </div>
          </article>

          <article className="RTplace">
            <h2 className="RTplace__title">Кольский</h2>
            <div className="RTplace__website">
              <abbr className="RTplace__website__url-heading" title="Uniform Resource Locator">Url</abbr><a
                className="RTplace__website__link"
                href="https://yourshot.nationalgeographic.com/photos/?keywords=kolskiy" target="_blank" rel="noreferrer">National Geographic</a>
            </div>
            <img className="RTplace__image" alt="Снежные горы на полуострове Кольский" src={placeKolsky} />
            <div className="RTplace__text">
              <p className="RTplace__paragraph">Почти весь полуостров находится за Полярным кругом. Саамская тундра, от которой
              на юг —
              тайга, а на север — Ледовитый океан, прикидывающийся Баренцевым морем.</p>
              <p className="RTplace__paragraph">Возможно, вы смотрели Звягинцева и даже слышали историю арктического фестиваля в
              Териберке. Возможно, слово «Хибины» не осталось под снегом школьных воспоминаний об уроках географии.
              Возможно, вы не интересовались пронизывающей земную кору сверхглубокой скважиной, а от апатитов вас давно
              накрывает апатия. Но ваша мечта увидеть северное сияние начинает сбываться с билетом в Мурманск.</p>
            </div>
          </article>

          <article className="RTplace">
            <h2 className="RTplace__title">Алтай</h2>
            <div className="RTplace__website">
              <abbr className="RTplace__website__url-heading" title="Uniform Resource Locator">Url</abbr><a
                className="RTplace__website__link"
                href="https://www.facebook.com/vera.bashmakova/posts/10156011613718822" target="_blank" rel="noreferrer">Facebook</a>
            </div>
            <img className="RTplace__image" alt="Вид из окна домика на лес Алтая" src={placeAltai} />
            <div className="RTplace__text">
              <p className="RTplace__paragraph">Алтай — одно из красивейших мест в России.
              В первую очередь из-за гор: если ехать вдоль хребта, вы увидите склоны, усыпанные соснами, горные реки и
              озёра. А если вы откроете
              в автомобиле окна, сможете познакомиться с невидимым чудом здешних мест — горным воздухом.</p>
              <p className="RTplace__paragraph">Климат на Алтае умеренный, поэтому ехать сюда лучше всего летом. Так вы увидите
              всё разнообразие местной флоры и фауны. По лесам Алтая бродят лоси, над хребтами летают орлы, а на
              равнинах пасутся косули. И знаменитые манулы — тоже обитатели Алтайского края.</p>
            </div>
          </article>

          <article className="RTplace">
            <h2 className="RTplace__title">Зимний Байкал</h2>
            <div className="RTplace__website">
              <abbr className="RTplace__website__url-heading" title="Uniform Resource Locator">Url</abbr><a
                className="RTplace__website__link" href="https://vk.com/baikalmile" target="_blank" rel="noreferrer">https://vk.com/baikalmile</a>
            </div>
            <img className="RTplace__image" alt="Потрескавшийся лед на озере Байкал" src={placeWinterBaikal} />
            <div className="RTplace__text">
              <p className="RTplace__paragraph">Всем известен Байкал как крупнейшее озеро в мире. Многие также знают, что это
              самый большой источник пресной воды и одно из красивейших мест в России.</p>
              <p className="RTplace__paragraph">Конечно, это всё так. Но Байкал ещё идеальное место для соревнований по
              скийорингу. Это такой вид спорта, когда лыжник привязывает себя к мотоциклу, и тандем старается развить
              как можно бóльшую скорость на льду. В марте 2019 года на фестивале «Байкальская миля» был поставлен
              мировой рекорд — 197.011 км/ч.</p>
            </div>
          </article>

          <article className="RTplace">
            <h2 className="RTplace__title">Карелия</h2>
            <div className="RTplace__website">
              <abbr className="RTplace__website__url-heading" title="Uniform Resource Locator">Url</abbr>
              <a className="RTplace__website__link" href="http://vodlozero.ru" target="_blank" rel="noreferrer">http://vodlozero.ru/</a>
            </div>
            <img className="RTplace__image" alt="Вид на реку в Карелии" src={placeKarelia} />
            <div className="RTplace__text">
              <p className="RTplace__paragraph">Сибирь заканчивается не на Урале, а в Карелии: образующая тайгу сибирская
              лиственница не растёт западнее Водлозера. Зато здесь она вымахивает на 30 метров — леса карельских
              национальных парков из-за непроходимых болот никогда не знали топора. Некоторым соснам уже больше чем
              полтысячелетия. Прикоснитесь к живому существу, видевшему солнце раньше, чем увидал его Иван Грозный. В
              девственном лесу на сотню километров не встретишь тропы. А на редких тропинках деревья в паре метров от
              земли помечены медвежьими когтями. Чтобы все знали, кто тут хозяин.</p>
            </div>
          </article>
        </section>

        <section className="RTcover">
          <a href="https://stampsy.com/na-elektrichkakh-do-baikala" className="RTcover__link" target="_blank" rel="noreferrer">
            <h2 className="RTcover__title">До Байкала «на собаках»</h2>
            <p className="RTcover__subtitle">По мотивам учебной темы о Транссибе и iframes — путешествие от столицы до Байкала
            на электричках.</p>
          </a>
        </section>

      </main>

      <footer className="RTfooter">
        <nav className="RTfooter__nav">
          <ul className="RTfooter__lists">
            <li className="RTfooter__list"><a className="RTfooter__link" target="_blank" rel="noreferrer" href="https://yandex.ru/maps">Карты</a></li>
            <li className="RTfooter__list"><a className="RTfooter__link" target="_blank" rel="noreferrer" href="https://yandex.ru/pogoda">Погода</a></li>
            <li className="RTfooter__list"><a className="RTfooter__link" target="_blank" rel="noreferrer" href="https://rasp.yandex.ru">Расписание</a></li>
            <li className="RTfooter__list"><a className="RTfooter__link" target="_blank" rel="noreferrer" href="https://calendar.yandex.ru">Календарь</a></li>
            <li className="RTfooter__list"><a className="RTfooter__link" target="_blank" rel="noreferrer" href="https://travel.yandex.ru">Путешествия</a></li>
          </ul>
        </nav>
        <p className="RTfooter__copytight">&copy; 2020. Ильина Елена</p>
      </footer>


    </div>
  );
}

export default RussianTravel;