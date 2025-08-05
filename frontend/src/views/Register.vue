<template>
  <div class="register-wrapper">
    <div class="card">
      <div class="card-left">
        <img src="../assets/sign_up.jpg" alt="left-image" />
      </div>
      <div class="card-right">
        <h2>Join the Trend!</h2>
        <p class="subtitle">Create your account to start shopping in style</p>

        <form @submit.prevent="registerUser">
          <div class="form-group">
            <i class="fas fa-user"></i>
            <input v-model="form.name" type="text" required />
            <label>First Name</label>
          </div>

          <div class="form-group">
            <i class="fas fa-user"></i>
            <input v-model="form.surname" type="text" required />
            <label>Last Name</label>
          </div>

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

          <button class="btn">Sign Up</button>
          <p v-if="message" class="error">{{ message }}</p>
          <p class="login-redirect">
            Already have an account?
            <router-link to="/login">Login</router-link> | <router-link to="/">Go Back Home</router-link>
          </p>
        </form>
      </div>
    </div>

    <!-- Success Alert -->
    <transition name="fade">
      <div v-if="showSuccess" class="success-alert">
        <div class="alert-content">
          <i class="fas fa-check-circle"></i>
          <span>Your Account has been successfully created. You may proceed to login.</span>
          <button @click="showSuccess = false" class="close-btn">&times;</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        surname: '',
        email: '',
        password: ''
      },
      message: '',
      showSuccess: false
    };
  },
  methods: {
    async registerUser() {
      try {
        const res = await this.$store.dispatch('register', this.form);
        this.message = '';
        this.showSuccess = true;

        // this hides the alert after 5 seconds
        setTimeout(() => {
          this.showSuccess = false;
          this.$router.push('/login'); // Redirect to login after successful registration
        }, 5000);
      } catch (err) {
        this.message = err.response?.data?.message || 'Registration failed';
      }
    }
  }
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.register-wrapper {
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

.error {
  color: #dc3545;
  margin-top: 15px;
  text-align: center;
}

.login-redirect {
  text-align: center;
  font-size: 0.9rem;
  margin-top: 20px;
}

.login-redirect a {
  color: #007bff;
  text-decoration: none;
  transition: 0.3s ease-in-out;
}

.login-redirect a:hover {
  color: #003670;
}

/* Success alert popup */
.success-alert {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: #4CAF50;
  color: white;
  padding: 16px 30px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  z-index: 10;
}

.success-alert .alert-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.success-alert .fa-check-circle {
  font-size: 1.2rem;
}

.success-alert .close-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  color: white;
  margin-left: auto;
  cursor: pointer;
}

/* Transition Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive for grid cards*/
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
