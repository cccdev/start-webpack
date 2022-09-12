import './index.css';
import './style.less';

function createElement() {
  const div = document.createElement('div');
  div.innerHTML = 'hello world';
  div.classList.add('div');
  document.body.append(div);
}
createElement();
