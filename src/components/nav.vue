<template>
  
  <nav class="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark" >
     <div class="container-fluid">
       <a class="navbar-brand" href="#">
         <img src="/images/1.png" alt="" style="width: 50px;">
       </a>
 
         <span class="navbar-toggler-icon"></span>
      
 
       <div class="collapse navbar-collapse" id="navbarNavDropdown">
         <ul class="navbar-nav">
           <li class="nav-item"><strong> <a class="nav-link active" aria-current="page" href="/TrangChu">
               <i class="bi bi-pencil-square"></i> Trang Chủ
             </a></strong>
            
           </li>


           <li class="nav-item"><strong> <a class="nav-link active" aria-current="page" href="/Post">
               <i class="bi bi-pencil-square"></i> Bài viết
             </a></strong>
            
           </li>
           <li class="nav-item"> <strong><a class="nav-link" href="#">
               <i class="bi bi-play-btn"></i> Video
             </a></strong>
             
           </li>
           <li class="nav-item">
            <strong> <a class="nav-link" href="#">
               <i class="bi bi-info-circle"></i> Giới Thiệu
             </a></strong>
            
           </li>
           <li class="nav-item"> <strong><a class="nav-link" href="#">
               <i class="bi bi-calendar-event"></i> Sự kiện
             </a></strong>
             
           </li>
           <li class="nav-item dropdown">
             <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               <i class="bi bi-person-circle"></i> Tài khoản
             </a>
             <ul class="dropdown-menu">
              
                <li data-bs-toggle="modal" data-bs-target="#loginModal"><a class="dropdown-item" ><i class="bi bi-box-arrow-in-right" data-bs-toggle="modal" data-bs-target="#loginModal"></i> Đăng nhập</a></li>

             
               <li><a class="dropdown-item" href="#"><i class="bi bi-key"></i> Quên Mật khẩu</a></li>
               <li data-bs-toggle="modal" data-bs-target="#registerModal"><a class="dropdown-item" href="#"><i class="bi bi-person-plus"></i> Đăng kí thành viên</a></li>
             </ul>
           </li>

           
           
         </ul>

         

       

         <!-- Login Modal -->
<div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-light" id="loginModalLabel">Login</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="email" class="form-label text-light">Email address</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your email" required>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label text-light">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter your password" required>
          </div>
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  </div>
</div>



<!-- Registration Modal -->
<div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-light" id="registerModalLabel">Register</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="registerEmail" class="form-label text-light">Email address</label>
            <input type="email" class="form-control" id="registerEmail" placeholder="Enter your email" required>
          </div>
          <div class="mb-3">
            <label for="registerPassword" class="form-label text-light">Password</label>
            <input type="password" class="form-control" id="registerPassword" placeholder="Enter your password" required>
          </div>
          <div class="mb-3">
            <label for="registerConfirmPassword" class="form-label text-light">Confirm Password</label>
            <input type="password" class="form-control" id="registerConfirmPassword" placeholder="Confirm your password" required>
          </div>
          <button type="submit" class="btn btn-primary w-100 text-light">Register</button>
        </form>
      </div>
    </div>
  </div>
</div>

        
 
        
       </div> 
     </div>
   </nav>

</template>

<script>
export default {
    name:'NavNav',

}
</script>

<style>

</style>