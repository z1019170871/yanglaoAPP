import { createApp } from "vue";
import { Button } from "vant";
import { Field } from "vant";
import { Cascader } from 'vant';
import { Popup } from 'vant';
import { Cell, CellGroup } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { Area } from 'vant';
import { Form } from 'vant';
import {Toast} from 'vant';
import { Icon } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Col, Row } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { NoticeBar } from 'vant';
import { Pagination } from 'vant';
import { Search } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { NavBar } from 'vant';
import { Collapse, CollapseItem } from 'vant';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'lib-flexible/flexible';

createApp(App)
  .use(CollapseItem)
  .use(Collapse)
  .use(NavBar)
  .use(DropdownItem)
  .use(DropdownMenu)
  .use(Search)
  .use(Pagination)
  .use(NoticeBar)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Row)
  .use(Col)
  .use(SwipeItem)
  .use(Swipe)
  .use(Icon)
  .use(Toast)
  .use(Form)
  .use(Area)
  .use(Radio)
  .use(RadioGroup)
  .use(Cell)
  .use(CellGroup)
  .use(Button)
  .use(Popup)
  .use(Field)
  .use(Cascader)
  .use(store)
  .use(router)
  .mount("#app");
