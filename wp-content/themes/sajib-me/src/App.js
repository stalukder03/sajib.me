import React, { useState, useEffect} from 'react'
import {useGlobalContext} from './context'

const App = () => {
    const {isLoading,isError,menuItems,siteInfo,userProfile} = useGlobalContext();
    
    if( isLoading ){
        return 'Loading...'
    }

    if( isError ){
        return 'Error happend'
    }

    return (
        <>
            <div className="site">
                <div id="sidebar" className="sidebar">
                    <header id="masthead" className="site-header " role="banner">
                        <div className="site-branding">
                            <img className="profile-pic" src={userProfile.attachment_url} alt={`${siteInfo?.name} - sajib.me`} />
                            <h1 className="site-title"><a href="http://sajib.local/" rel="home">{siteInfo?.name}</a></h1>
                            <p className="site-description">{siteInfo?.tag_title}</p>
                            <button className="secondary-toggle">Menu and widgets</button>
                        </div>
                    </header>
                    {menuItems && (
                        <div id="secondary" className="secondary">
                            <div id="widget-area" className="widget-area" role="complementary">
                                <aside id="nav_menu-2" className="widget widget_nav_menu">
                                    <div className="menu-main-menu-container">
                                        <ul id="menu-main-menu" className="menu">
                                            {menuItems.map( menu => {
                                                return (
                                                    <li key={menu.id} className={`menu-item menu-item-${menu.id}`}>
                                                        <a href={menu.url}>{menu.title}</a>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    )}
                </div>




                <div id="content" className="site-content">
                    <div id="primary" className="content-area">
                    <main id="main" className="site-main" role="main">
                        <article id="post-1" className="post-1 post type-post status-publish format-standard hentry category-uncategorized">
                        <header className="entry-header">
                            <h2 className="entry-title"><a href="http://restapi.local/how-to-add-browsersync-and-sass-with-wordpress-theme-using-gulp/" rel="bookmark">How to Add BrowserSync and SASS with WordPress Theme using GULP</a></h2>	</header>{/* .entry-header */}
                        <div className="entry-content">
                            <p><strong>Step 1:</strong><br />
                            install <code>gulp-cli</code> globally on your system. It can be install with the following command,<br />
                            <code>npm install -g gulp-cli</code></p>
                            <p><strong>Step 2:</strong><br />
                            Go to the theme’s root directory and open the terminal. After that run the following commands.<br />
                            <code>npm init-y</code><br />
                            <code>-y</code> flag will skip the questions and automatically created a <code>package.json</code> file.</p>
                            <p>Now run the following command to install gulp and some dev-dependency tools.<br />
                            <code>npm install gulp gulp-sass gulp-concat browser-sync --save-dev</code></p>
                            <p><strong>Step 3:</strong><br />
                            Once the dependencies are installed, create a <code>gulpfile.js</code> inside the theme root. Given below is my gulpfile.js</p>
                            <p><code>var gulp        = require('gulp');<br />
                                var browserSync = require('browser-sync').create();<br />
                                var sass        = require('gulp-sass');<br />
                                var concat      = require('gulp-concat');<br />
                                var cssbeautify = require('gulp-cssbeautify');<br />
                                var prefix      = require('gulp-autoprefixer');</code></p><code>
                            <p>// sass to css<br />
                                gulp.task('sass', function () {'{'}<br />
                                return gulp.src('./assets/sass/main.scss',)<br />
                                .pipe(sass().on('error', sass.logError))<br />
                                .pipe(prefix('last 2 versions'))<br />
                                .pipe(cssbeautify())<br />
                                .pipe(gulp.dest('./assets/css/'))<br />
                                .pipe(browserSync.reload({'{'}stream: true{'}'}))<br />
                                {'}'});</p>
                            <p>// browser-sync task for starting the server.<br />
                                gulp.task('browser-sync', function() {'{'}<br />
                                //watch files<br />
                                var files = [<br />
                                './assets/sass/**/*.scss',<br />
                                './**/*.php'<br />
                                ];</p>
                            <p>  //initialize browsersync<br />
                                browserSync.init(files, {'{'}<br />
                                //browsersync with a php server<br />
                                watchTask: true,<br />
                                proxy: "http://dev.wp/azino/"<br />
                                {'}'});</p>
                            <p>{'}'});</p>
                            <p>// Start the livereload server and watch files for change<br />
                                gulp.task( 'watch', function() {'{'}<br />
                                gulp.watch("./assets/sass/**/*.scss", gulp.parallel('sass') );<br />
                                {'}'} );</p>
                            </code><p><code>// Default task to be run with `gulp`<br />
                                gulp.task( 'default', gulp.parallel('sass', 'browser-sync', 'watch'));</code></p>
                            <p>Now run <code>gulp</code> command line and see the magic.</p>
                        </div>{/* .entry-content */}
                        <footer className="entry-footer">
                            <span className="posted-on"><span className="screen-reader-text">Posted on </span><a href="http://restapi.local/how-to-add-browsersync-and-sass-with-wordpress-theme-using-gulp/" rel="bookmark"><time className="entry-date published" dateTime="2019-10-20T11:51:14+06:00">October 20, 2019</time><time className="updated" dateTime="2020-11-13T12:49:30+06:00">November 13, 2020</time></a></span>		<span className="edit-link"><a className="post-edit-link" href="http://restapi.local/wp-admin/post.php?post=1&action=edit">Edit</a></span>	</footer>{/* .entry-footer */}
                        </article>{/* #post-1 */}
                    </main>{/* .site-main */}
                    </div>{/* .content-area */}
                </div>


            </div>
        </>
    )
}

export default App