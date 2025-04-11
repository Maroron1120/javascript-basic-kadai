const Btn = document.getElementById('btn');
const Text=  document.getElementById('text');

Btn.addEventListener('click', () => {
  console.log('ボタンをクリックしました');
 Text.textContent = 'ボタンをクリックしました';
});
