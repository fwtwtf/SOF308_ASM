<template>
  
     
<header class="cd-main-header" style="color: #505260;">
 
  
  <nav class="navbar navbar-expand-lg bg-body-tertiary" >
     <div class="container-fluid">
       <a class="navbar-brand" href="#">
         <img src="/images/1.png" alt="" style="width: 50px;">
       </a>
 
         <span class="navbar-toggler-icon"></span>
      
 
       <div class="collapse navbar-collapse" id="navbarNavDropdown">
         <ul class="navbar-nav">
           <li class="nav-item"><strong> <a class="nav-link active" aria-current="page" href="/Post">
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
        <h5 class="modal-title" id="loginModalLabel">Login</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your email" required>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
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
        <h5 class="modal-title" id="registerModalLabel">Register</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="registerEmail" class="form-label">Email address</label>
            <input type="email" class="form-control" id="registerEmail" placeholder="Enter your email" required>
          </div>
          <div class="mb-3">
            <label for="registerPassword" class="form-label">Password</label>
            <input type="password" class="form-control" id="registerPassword" placeholder="Enter your password" required>
          </div>
          <div class="mb-3">
            <label for="registerConfirmPassword" class="form-label">Confirm Password</label>
            <input type="password" class="form-control" id="registerConfirmPassword" placeholder="Confirm your password" required>
          </div>
          <button type="submit" class="btn btn-primary w-100">Register</button>
        </form>
      </div>
    </div>
  </div>
</div>

        
 
        
       </div> 
     </div>
   </nav>


  

   <!-- Carousel Section -->
   <div id="blogCarousel" class="carousel slide mb-4" data-bs-ride="carousel">
       <div class="carousel-inner">
         <div class="carousel-item active">
           <img src="/images/asm4.jpg" class="d-block w-100" alt="Image 1" width="810" height="750"/>
           <div class="carousel-caption d-none d-md-block">
             <h5>Bài viết nổi bật 1</h5>
             <p>Mô tả ngắn về bài viết nổi bật 1</p>
           </div>
         </div>
         <div class="carousel-item">
          <img src="/images/asm2.jpg" class="d-block w-100" alt="Image 1" width="910" height="750"/>
           <div class="carousel-caption d-none d-md-block">
             <h5>Bài viết nổi bật 2</h5>
             <p>Mô tả ngắn về bài viết nổi bật 2</p>
           </div>
         </div>
         <div class="carousel-item">
          <img src="/images/asm3.jpg" class="d-block w-100" alt="Image 1" width="910" height="750"/>
           <div class="carousel-caption d-none d-md-block">
             <h5>Bài viết nổi bật 3</h5>
             <p>Mô tả ngắn về bài viết nổi bật 3</p>
           </div>
         </div>
       </div>
       <button
         class="carousel-control-prev"
         type="button"
         data-bs-target="#blogCarousel"
         data-bs-slide="prev"
       >
         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Previous</span>
       </button>
       <button
         class="carousel-control-next"
         type="button"
         data-bs-target="#blogCarousel"
         data-bs-slide="next"
       >
         <span class="carousel-control-next-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Next</span>
       </button>
     </div>
   

   
   
</header>

<main>

  <section class="py-5 text-center container bg-light rounded-3 shadow-sm">
  <div class="row py-lg-5">
    <div class="col-lg-8 col-md-10 mx-auto">
      <h1 class="fw-bold display-4 text-primary">TẤT CẢ CÁC BÀI VIẾT</h1>
      <p class="lead text-muted mb-4">
        Khám phá những bài viết mới nhất, những kiến thức hữu ích và cập nhật xu hướng mới trong các lĩnh vực khác nhau.
      </p>
      
    </div>
  </div>
</section>


  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
            <img src="/images/tap-piltes.jpg" class="d-block w-100" alt="Image 1" />

            <div class="card-body">
              <p class="card-text">
                    Tuổi trẻ chỉ nghĩ đến những chuyến đi, đời mong một ngày
                    được bay nhảy trên những phương trời mới lạ. Để rồi những cô
                    đơn mê mải, tuổi trẻ ấy mới muốn một nơi để trở về.
                  </p>              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" ><a class="nav-link active" aria-current="page" href="/TrangChu/PostDeteil"> views</a></button>
                 
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src="/images/video2.jpg" class="d-block w-100" alt="Image 1" />
            <div class="card-body">
              <h5 class="card-title">Chút tâm tư những ngày cuối năm</h5>
                  <p class="card-text">
                    Guồng quay cuộc sống dù có vội vàng, dù có tấp nập đến đâu
                    thì cũng chẳng nằm ngoài quy luật tự nhiên và bất biến xuân,
                    hạ, thu, đông. Và rồi một năm cũ sắp trôi qua.
                  </p>              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src="/images/video3.jpg" class="d-block w-100" alt="Image 1" />
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
            <img src="/images/video1.jpg" class="d-block w-100" alt="Image 1" />
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src="/images/video4.jpg" class="d-block w-100" alt="Image 1" />
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src="/images/video2.jpg" class="d-block w-100" alt="Image 1" />
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>

       
        
      </div>
    </div>
  </div>

</main>

<footer>
  <div class="collapse bg-dark" id="navbarHeader">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-md-7 py-4">
          <h4 class="text-white">About</h4>
        </div>
        <div class="col-sm-4 offset-md-1 py-4">
          <h4 class="text-white">Contact</h4>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white">hehe</a></li>
            <li><a href="#" class="text-white">Like on Facebook</a></li>
            <li><a href="#" class="text-white">Email me</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container">
      <a href="#" class="navbar-brand d-flex align-items-center">
        <strong>&copy; 2024 Blog của Tôi. Tất cả quyền được bảo lưu.</strong>
        
        
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>


      
    </div>
  </div>
</footer>
 
     </template>
     
     <script>

     
 
     
     export default {
         name: "Lab1Bai4",
     
     }
     </script>
     
     <style>
     
     </style>