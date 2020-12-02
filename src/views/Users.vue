<template>
  <div class="container py-5">
    <NavTabs />

    <Navbar />

    <div class="row">
      <!-- 使用者卡片 RestaurantCard-->
      <UserCard v-for="user in users" :key="user.id" :initial-user="user" />
    </div>
  </div>
</template>


<script>
import NavTabs from "./../components/NavTabs";
import UserCard from "./../components/UserCard";
import Navbar from "./../components/Navbar";

const dummyData = {
  users: [
    {
      id: 902,
      name: "Serena",
      email: "serena@gmail.com",
      password: "$2a$10$qh4WPjAiZsOxg2sCF2KEP.4P7p9kS6vAeTujIr3cZXfE3vaWVqUMO",
      isAdmin: false,
      image: null,
      createdAt: "2020-11-23T10:13:44.000Z",
      updatedAt: "2020-11-23T10:13:44.000Z",
      Followers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$0dBI.8S//NhlGeouBUbV3.oBDkdbbqXObuMJyuS.PHxjzdW/PvqYy",
          isAdmin: true,
          image: null,
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-11-23T10:08:45.000Z",
          Followship: {
            followerId: 1,
            followingId: 902,
            createdAt: "2020-11-30T00:33:42.000Z",
            updatedAt: "2020-11-30T00:33:42.000Z",
          },
        },
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$s7ShjXk/VR4nVoFtm9PLG.LR6x7wv77vwouGXoKssT7Xfk/rOsQZe",
          isAdmin: false,
          image: null,
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-11-23T10:08:45.000Z",
          Followship: {
            followerId: 2,
            followingId: 902,
            createdAt: "2020-11-30T05:36:48.000Z",
            updatedAt: "2020-11-30T05:36:48.000Z",
          },
        },
      ],
      FollowerCount: 2,
      isFollowed: true,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$s7ShjXk/VR4nVoFtm9PLG.LR6x7wv77vwouGXoKssT7Xfk/rOsQZe",
      isAdmin: false,
      image: null,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
      Followers: [
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$s7ShjXk/VR4nVoFtm9PLG.LR6x7wv77vwouGXoKssT7Xfk/rOsQZe",
          isAdmin: false,
          image: null,
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-11-23T10:08:45.000Z",
          Followship: {
            followerId: 2,
            followingId: 2,
            createdAt: "2020-03-25T07:52:27.000Z",
            updatedAt: "2020-03-25T07:52:27.000Z",
          },
        },
      ],
      FollowerCount: 1,
      isFollowed: false,
    },
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$0dBI.8S//NhlGeouBUbV3.oBDkdbbqXObuMJyuS.PHxjzdW/PvqYy",
      isAdmin: true,
      image: null,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$TPKFC8BS5/E37CFM3kx8yOPya6L5ifI0S8aFQ7b3jdA.oEzjXwYby",
      isAdmin: false,
      image: null,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 912,
      name: "123",
      email: "123@123",
      password: "$2a$10$eHSHhg/V3oNLm59hWWVDyeE3JA6Ufyq7ztCvsqkMaUxk382df4Oq6",
      isAdmin: false,
      image: null,
      createdAt: "2020-11-29T17:19:13.000Z",
      updatedAt: "2020-11-29T17:19:13.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 922,
      name: "111",
      email: "111@111",
      password: "$2a$10$Tm5YIdzQb7recZgv/A5ltuS.UtwwyovNqWYr45QfFpBk/vtU3Ppce",
      isAdmin: false,
      image: null,
      createdAt: "2020-11-29T17:42:08.000Z",
      updatedAt: "2020-11-29T17:42:08.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

export default {
  name: "Users",
  components: {
    NavTabs,
    UserCard,
    Navbar,
  },
  data() {
    //vue的資料物件
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      //函式名稱為自定義
      const { users } = dummyData;
      this.users = users; //this 指向 vm例項
    },
  },
};
</script>