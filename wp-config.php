<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */



define('WP_HOME','http://localhost:8888/FourSight');
define('WP_SITEURL','http://localhost:8888/FourSight');

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', '4sight');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Ls6qUIu77<,]P l02Jh} Y<_*_O]J.h(o9.ecuX}~ar_lY`5U9MMsf~k*$D<  1N');
define('SECURE_AUTH_KEY',  'T_l1^i7CF1rtc{|OM4Y1s8+>W0Tykk,.T.?D938iGu0#WVio=!(78TrW;v=%.^]+');
define('LOGGED_IN_KEY',    '4aEfFF^,-lw.i7s.Nle)p:T0Eh6.:{U3yJ#;;IWBoX8DWqm)mygWjO;^$E;;EA2b');
define('NONCE_KEY',        'lGeB$(Q/E.YgU}[b3]-K:V!$9]C=+yf:1>I+7!~%Jdi<$?AUCb}b+=~Y}GP))?P?');
define('AUTH_SALT',        'RY.SBK-52`Kb;:!l+tJTn@u{MVpF|X6Gxdq`azgY:g$f,/HK.Jpo*|/OR{+~./,c');
define('SECURE_AUTH_SALT', '8_5<Eb{>zGzQN^u PtAj93%fCw}bcE_/kGy9VU-ejN{s]1!/rP^v@&e S<aMEW[g');
define('LOGGED_IN_SALT',   'OXt3;WqUe(Uw&L/ku^v}^zEeA!BF:;mhN,nRIl]GpI~#3mf0W@K2kW*SO;ZL5^y9');
define('NONCE_SALT',       'JZ{Wgs$R&K6}k @eD=}@-;1L6L*^Atm*w8M$uZ`C9NtnG&!R:wpI&~w`?xp3X%PV');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');