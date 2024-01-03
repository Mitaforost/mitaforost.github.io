<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки базы данных
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'childhood' );

/** Имя пользователя базы данных */
define( 'DB_USER', 'root' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', '' );

/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'rR+{-1LZhftQ7`#EXpIagWD;3w[n9^A4{!=yk,S]1OJzg~iC&-GmaC}#wYh#DD:y' );
define( 'SECURE_AUTH_KEY',  'Ee$qHXE:I.zS4So|p3+e#w_>ZzBjoCpObEkW2`WRHqy5adT6_fAWO>>{Fol_7>YS' );
define( 'LOGGED_IN_KEY',    '3[`a4ak:]uw{FQic{8vWCE8v%J_G%f4g?N}_J(ceza*}*kc0Zi^jqG.M(mU<TQXP' );
define( 'NONCE_KEY',        'KoGrO$t9a8I>7-G/>}|:ZJE[21t;faW&bQDVhkz*|!U{g<D2y7RlBH>Py34&;WED' );
define( 'AUTH_SALT',        'vsQ!.xAuH]([95ke}$QTtu.G|f3ZFr6{cmgL?eET0>X~HfUyC3Mw|iE0qeEt~.dF' );
define( 'SECURE_AUTH_SALT', 'oNi6knV;^N/:{$6Toyj{kZfXgD7[-hvdmFWp[c3#Ctm%-0MHXEJ5XCsnY7PiL4V*' );
define( 'LOGGED_IN_SALT',   ';)M+d;/I?Ib55WGs[pJ*S.H$*;*X0e}=ZYX<;BSzb(YU)hU`f+o<KSFH4c]xnOYu' );
define( 'NONCE_SALT',       'NHKfat $$$UPG~9u)I{^LB;6j,x?tUMh&?Wh81oO-cQk*X;QN UflU-qN#j++rLq' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
