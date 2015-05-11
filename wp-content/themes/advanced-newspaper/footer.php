</div><!-- wrapper -->

<div id="footer-wrapper">
<div id="footer">

	<ul class="footercats">	
	<?php
		if(of_get_option('of_nav4', 0) == 1) { 
			wp_nav_menu( array('theme_location' => 'footer-nav1', 'container' => false, 'items_wrap' => '%3$s'));
		} else { ?>
		<?php wp_list_categories('depth=1&orderby='. of_get_option('of_order_cats') .'&order='. of_get_option('of_sort_cats') .'&title_li=&exclude='. of_get_option('of_ex_cats')); ?>
	<?php } ?>	
	</ul>	
	<div class="clear"></div>

	<!-- <ul class="footerpages">	
	<?php /*
		if(of_get_option('of_nav5', 0) == 1) { 
			wp_nav_menu( array('theme_location' => 'footer-nav2', 'container' => false, 'items_wrap' => '%3$s'));
		} else { ?>
		<?php wp_list_pages('depth=1&sort_column=menu_order&title_li=&exclude='. of_get_option('of_ex_pages')); ?>
		<li><a rel="nofollow" href="<?php if ( of_get_option('of_rssaddr') <> '' ) { echo of_get_option('of_rssaddr'); } else { echo bloginfo('rss2_url'); } ?>"><?php _e('RSS','advanced'); ?></a></li> 
	<?php } */?>	
	</ul> -->
	<div class="clear"></div>
			
	<div id="footer_meta">
	
<div class="foot_col1">
<strong>इंडियास्पेंड <hr /></strong>
<p>
<a href="<?php echo get_site_url(); ?>" >होम</a><br>
<a href="<?php echo get_site_url(); ?>/about" >विषय में</a><br>
<a href="<?php echo get_site_url(); ?>/category/viznomics">विज़नाैमिक्स्</a><br>
<a href="<?php echo get_site_url(); ?>/category/resources">संसाधन</a>   <br>     
<a href="<?php echo get_site_url(); ?>/contactus">संपर्क</a><br>
</p>
</div>

<div class="foot_col1">
<strong>क्षेत्रक <hr /></strong>
<p>
<a href="<?php echo get_site_url(); ?>/category/sectors/economy-policy">अर्थव्यवस्था व नीति</a><br>
<a href="<?php echo get_site_url(); ?>/category/sectors/education">शिक्षा</a><br>
<a href="<?php echo get_site_url(); ?>/category/sectors/health">सेहत</a><br>
<a href="<?php echo get_site_url(); ?>/category/sectors/infrastructure">बुनियादी सुविधाएँ </a><br>
<a href="<?php echo get_site_url(); ?>/category/sectors/agriculture">कृषि</a><br>
<a href="<?php echo get_site_url(); ?>/category/sectors/defence">रक्षा</a>

</p>
</div>

<div class="foot_col1">
<strong>जांच<hr /></strong>
<p>
 <a href="<?php echo get_site_url(); ?>/category/investigations/central">केंद्र</a><br>
<a href="<?php echo get_site_url(); ?>/category/investigations/state">प्रदेश</a>
</p>

</div>

<div class="foot_col1">
<strong>प्रदेश<hr /></strong>
<p>
<a href="<?php echo get_site_url(); ?>/category/states/new-delhi">नयी दिल्ली </a><br>
<a href="<?php echo get_site_url(); ?>/category/states/west-bengal">पश्चिम बंगाल</a><br>
<a href="<?php echo get_site_url(); ?>/category/states/tamil-nadu">तमिल नाडु </a><br>
<a href="<?php echo get_site_url(); ?>/category/states/maharashtra">महाराष्ट्र  </a>
</p>
</div>
<!--
<div class="foot_col1">
<table class="foot_col2_inside">
<tr><td colspan="2">
</td></tr>
<tr><td colspan="2">विशेष रिपोर्ट और अपडेट प्राप्त करने के लिए हमारे प्रीमियम द्वि- साप्ताहिक समाचार पत्र की सदस्यता लें.</td></tr>
<tr>
<td><?php //mailchimpSF_signup_form(); ?></td>
</tr>
</table>
</div>  -->
<div class="foot_col2">
<a href="http://gijn.org/"> <img src="<?php echo get_site_url(); ?>/wp-content/uploads/gijn-footer.png" /></a>
</div>
<div class="copyright">
		<p class="footer-left-text">	
			<?php /* Replace default text if option is set */
			if( of_get_option('of_an_footer1', 0) == 1){
				echo of_get_option('of_an_footer1_text');
			} else { 
			?>
				&copy; <?php echo the_date('Y'); ?>, <a href="#top" title="<?php bloginfo('name'); ?>" rel="home"><strong>&uarr;</strong> <?php bloginfo('name'); ?></a>
			<?php } ?>
		</p>
		
		<p class="footer-right-text">
			<?php /* Replace default text if option is set */
			if( of_get_option('of_an_footer2', 0) == 1){ 
				echo of_get_option('of_an_footer2_text');
			} else {
				wp_loginout(); 
				if ( !is_user_logged_in() ) { 
					echo '-'; ?>
					<a href="<?php bloginfo('url'); ?>/wp-admin/edit.php">Posts</a> - 
					<a href="<?php bloginfo('url'); ?>/wp-admin/post-new.php">Add New</a>
				<?php } ?> - 
			<?php } ?>
			<!--<a href="http://wordpress.org/" title="<?php esc_attr_e('Semantic Personal Publishing Platform', 'advanced'); ?>" rel="generator"><?php _e('Powered by WordPress', 'advanced'); ?></a> - 
			
			Designed by <a href="http://www.gabfirethemes.com/" title="Premium WordPress Themes">Gabfire Themes</a>-->
			<?php wp_footer(); ?>
		</p>
		</div>
		<div class="clear"></div>
	</div>
<!-- Javascript tag  -->

</html>



