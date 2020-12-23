<template>
  <footer>
    <div class="main-content">
      <div class="footer-block block-a">
        <div class="footer-title">關於 Mealfresh</div>
        <br />
        <div class="footer-item">
          <li>使用者條款</li>
          <li>隱私權保護政策</li>
          <li>常見問題</li>
        </div>
      </div>

      <div class="footer-block block-b">
        <div class="footer-title">聯絡我們</div>
        <br />
        <div class="footer-item social-media">
          <a href="https://www.facebook.com/" target="_blank">
            <img src="../assets/images/facebook-icon.svg" alt="fb-icon" />
          </a>
          <a href="https://www.instagram.com/?hl=en" target="_blank">
            <img src="../assets/images/instagram-icon.svg" alt="ig-icon" />
          </a>
          <a
            href="https://github.com/michaelnctu/twitter-fullstack-2020"
            target="_blank"
          >
            <img src="../assets/images/github-icon.svg" alt="github-icon" />
          </a>
        </div>
      </div>

      <div class="footer-block reference block-c">
        <div class="footer-title">專案資料參考來源</div>
        <br />
        Zomato / https://www.zomato.com/ncr
      </div>
    </div>

    <div class="contact-content">
      <div>
        <li>統一編號：12345678</li>
        <li>代表號：02-3456-7890</li>
        <li>台北市復興北路 201 號 6 樓之 4</li>
      </div>
      <p></p>
      <div>
        <li>電話：+886-2-2546-9766</li>
        <li>Email：taiwan@alphacamp.co</li>
      </div>
      <p></p>
    </div>
  </footer>
</template>


<style>
ul,
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

footer {
  width: 100%;
}

.main-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: rgb(209, 207, 207);
}

.social-media {
  display: flex;
}

img {
  height: 30px;
  width: 30px;
  margin-right: 15px;
}

.footer-block {
  margin: 80px;
}

.contact-content {
  background-color: rgb(172, 167, 167);
  display: flex;
  justify-content: center;
  padding: 10px;
  display: flex;
}

.footer-title {
  font-weight: 700;
}
</style>