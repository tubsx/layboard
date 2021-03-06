<div id="wrapper">
<!-- Sidebar -->
<ul class="navbar-nav bg-gradient-main sidebar sidebar-dark accordion toggled" id="accordionSidebar">

<!-- Sidebar - Brand -->
<a class="sidebar-brand d-flex align-items-center justify-content-center" href="<?php echo base_url();?>">
    <div class="sidebar-brand-icon">
        <img src="<?php echo base_url();?>/assets/images/layboard-board-white.png" alt="" style="height:30px;">
    </div>
    <div class="sidebar-brand-text mx-3"><img src="<?php echo base_url();?>/assets/images/layboard-word-white.png" alt="" style="height:20px;"> <sup></sup></div>
</a>

<!-- Divider -->
<hr class="sidebar-divider my-0">

<!-- Nav Item - Dashboard -->
<?php
    if($current_page == "dashboard")
    {
        echo '<li class="nav-item active">';
    }
    else
    {
        echo '<li class="nav-item">';
    }
?>

    <a class="nav-link" href="<?php echo base_url();?>/dashboard">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></a>
</li>

<!-- Divider -->
<hr class="sidebar-divider">

<!-- Heading -->
<div class="sidebar-heading">
    Interactions
</div>

<!-- Nav Item - Pages Collapse Menu -->
<li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i class="fas fa-fw fa-user-tie"></i>
        <span>Freelancers</span>
    </a>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Actions</h6>
            <a class="collapse-item" href="buttons.html">Find Freelancers</a>
        </div>
    </div>
</li>

<!-- Nav Item - Utilities Collapse Menu -->
<li class="nav-item">
    <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        <i class="fas fa-fw fa-briefcase"></i>
        <span>Jobs</span>
    </a>
    <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Sections</h6>
            <a class="collapse-item" href="<?php echo base_url();?>/jobs">Job Posts</a>
            <a class="collapse-item" href="<?php echo base_url();?>/job_catalog">Job Catalog</a>
        </div>
    </div>
</li>

<!-- Divider -->
<!--hr class="sidebar-divider"-->

<!-- Heading -->

<!-- Nav Item - Charts -->
<!-- Divider -->
<hr class="sidebar-divider d-none d-md-block">

<!-- Sidebar Toggler (Sidebar) -->
<div class="text-center d-none d-md-inline">
    <button class="rounded-circle border-0" id="sidebarToggle"></button>
</div>

</ul>
<!-- End of Sidebar -->