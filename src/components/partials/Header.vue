<template>
  <div id="header">
    <div id="cloudLayout">
      <div id="cloud">
        <div id="logo">
          <label>Cloud in One</label>
        </div>
        <div id="menu">
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/about" class="navbar-item">About</router-link>
        </div>
        <div id="noti">
          <div id="setting">
            <div>
              <font-awesome-icon icon="bell" />
            </div>
            <div>
              <font-awesome-icon icon="cog" />
            </div>
            <div>
              <font-awesome-icon icon="question" />
            </div>
          </div>
          <div id="user">
            <router-link to="/signIn"><font-awesome-icon icon="user" /></router-link>
          </div>
        </div>
      </div>
    </div>
    <div id="rightSide">
      <div id="console">
        <label>Console</label>
      </div>
      <div id="servicePortal">
        <label>Service Portal</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
  data: function () {
    return {
      username: "sonht",
      info: null,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#header {
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  color: white;

  div {
    text-align: center;
  }
}
#menu {
  display: flex;
  flex-direction: row;
  margin-left: 20px;
}
#noti {
  display: flex;
  flex-direction: row;
  margin-left: auto;
}
#setting {
  display: flex;
  flex-direction: row;

  div {
    width: 50px;
  }
}

#user {
  width: 50px;
}

#rightSide {
  display: flex;
  background-color: saddlebrown;
}

#logo {
  label {
    margin-left: 20px;
  }
}

#cloudLayout {
  height: 100%;
  background-color: darkblue;
  width: inherit;
}

#cloud {
  display: flex;
  flex-direction: row;
  width: inherit;
  background-color: cornflowerblue;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  align-items: center;
  height: 100%;
}
#console {
  align-content: flex-end;
  width: 80px;
  background-color: darkblue;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
}
#servicePortal {
  align-content: flex-end;
  width: 120px;
  display: flex;
  background-color: saddlebrown;
  align-items: center;
}

label {
  margin: auto;
  font-weight: bold;
}
</style>