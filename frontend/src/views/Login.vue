<template>
  <div class="login-wrapper">
    <!-- Success or Error Alert -->
    <transition name="fade-slide">
      <div v-if="showMessage" :class="['alert', messageType]">
        <i :class="messageIcon"></i>
        <span>{{ message }}</span>
        <button class="close-btn" @click="showMessage = false">&times;</button>
      </div>
    </transition>

    <div class="card">
      <div class="card-left">
        <img src="../assets/log_in.jpg" alt="login" />
      </div>

      <div class="card-right">
        <h2>Welcome Back!👋</h2>
        <p class="subtitle">Login to your account and keep shopping</p>

        <form @submit.prevent="loginUser">
          <div class="form-group">
            <i class="fas fa-envelope"></i>
            <input v-model="form.email" type="email" required />
            <label>Email Address</label>
          </div>

          <div class="form-group">
            <i class="fas fa-lock"></i>
            <input v-model="form.password" type="password" required />
            <label>Password</label>
          </div>

          <button class="btn">Login</button>

          <p class="register-redirect">
            Don't have an account? <router-link to="/register">Sign Up</router-link> | <router-link to="/">Go Back
              Home</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      message: '',
      messageType: '', // 'success' or 'error'
      showMessage: false
    };
  },
  computed: {
    messageIcon() {
      return this.messageType === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle';
    }
  },
  methods: {
    async loginUser() {
      try {
        const res = await this.$store.dispatch('login', this.form);
        this.message = res.message || 'Logged in successfully!';
        this.messageType = 'success';
        this.showMessage = true;

        setTimeout(() => {
          this.showMessage = false;
          this.$router.push('/');
        }, 2500);
      } catch (err) {
        this.message = err.response?.data?.message || 'Oops! Something went wrong';
        this.messageType = 'error';
        this.showMessage = true;
      }
    }
  }
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.login-wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(120deg, #a1c4fd, #c2e9fb);
  overflow: hidden;
  position: relative;

}

.card {
  display: flex;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  backdrop-filter: blur(15px);
}

.card-left {
  flex: 1;
  display: none;
}

.card-left img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-right {
  flex: 1;
  padding: 40px;
  background: rgba(255, 255, 255, 0.85);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-right h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
  text-align: center;
  color: #333;
}

.subtitle {
  text-align: center;
  color: #555;
  margin-bottom: 25px;
  font-size: 0.95rem;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  position: relative;
  margin-bottom: 20px;
}

.form-group i {
  position: absolute;
  top: 14px;
  left: 15px;
  color: #999;
  font-size: 1rem;
}

input {
  width: 100%;
  padding: 14px 20px 14px 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
  transition: 0.3s;
  background: white;
  box-sizing: border-box;
}

input:focus {
  outline: none;
  border-color: #222;
}

label {
  position: absolute;
  left: 40px;
  top: 14px;
  color: #999;
  font-size: 0.85rem;
  transition: 0.3s;
  pointer-events: none;
  background: white;
  padding: 0 4px;
}

input:focus+label,
input:not(:placeholder-shown)+label {
  top: -10px;
  left: 35px;
  font-size: 0.75rem;
  color: #222;
}

.btn {
  padding: 14px;
  border: none;
  border-radius: 10px;
  background-color: #222;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.btn:hover {
  background-color: #000;
}

.register-redirect {
  text-align: center;
  font-size: 0.9rem;
  margin-top: 20px;
}

.register-redirect a {
  color: #007bff;
  text-decoration: none;
  transition: 0.3s ease-in-out;
}

.register-redirect a:hover {
  color: #002c5a;
}

/* Alert Styles */
.alert {
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  padding: 15px 25px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  z-index: 10;
  color: white;
}

.alert.success {
  background-color: #4caf50;
}

.alert.error {
  background-color: #dc3545;
}

.alert i {
  font-size: 1.2rem;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.4rem;
  color: white;
  margin-left: auto;
  cursor: pointer;
}

/* Transition Animation */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Responsive */
@media (min-width: 768px) {
  .card-left {
    display: block;
  }

  .card-right {
    flex: 1;
    padding: 50px;
  }
}
</style>
