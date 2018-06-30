-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 31, 2018 at 09:48 PM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `media`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity`
--

CREATE TABLE `activity` (
  `activity_id` varchar(1000) NOT NULL,
  `activity_name` varchar(1000) NOT NULL,
  `sdate` date NOT NULL,
  `edate` date NOT NULL,
  `comments` varchar(1000) DEFAULT NULL,
  `host_name` varchar(500) DEFAULT NULL,
  `ip_address` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `activity`
--

INSERT INTO `activity` (`activity_id`, `activity_name`, `sdate`, `edate`, `comments`, `host_name`, `ip_address`) VALUES
('dfsdhfjksdhfjk', 'hggh', '2018-03-22', '2018-01-01', 'klmklmlkmklmkl', 'nmlmnm,', '::ffff:127.0.0.1'),
('dfsdhfjksdhfjk', 'hggh', '2018-03-22', '2018-01-01', 'klmklmlkmklmkl', 'nmlmnm,', '::ffff:127.0.0.1'),
('klklmnlknjkn', 'hggh', '2018-03-22', '2019-02-02', 'njknjknjk', 'njknjknjk', '::ffff:127.0.0.1'),
('klklmnlknjkn', 'hggh', '2018-03-22', '2019-02-02', 'njknjknjk', 'njknjknjk', '::ffff:127.0.0.1'),
('klklmnlknjkn', 'hggh', '2018-03-23', '2019-03-20', 'njknjknjk', 'njknjknjk', '::ffff:127.0.0.1'),
('hggh', 'dzfdzcdvds', '2018-03-24', '2018-01-01', 'jjknkjnjknkjnknkn', ';kl;k;ljkjkljkljkljlk', '::ffff:127.0.0.1'),
('hggh', 'smdflmndjfnjdsnfjk', '2018-03-24', '2021-01-01', 'nkjnjknjkn', 'kjkljkljkl', '::ffff:127.0.0.1'),
('.d,dsmklfnsdlcndslcnvlsd', 'mnmdsnfksdnkfn', '2018-03-24', '2021-01-01', 'kjsfklgnrjklgnfkjd', 'mnmsdnfknsdkvnsdk', '::ffff:127.0.0.1'),
('', 'lhjhihihi', '2018-03-24', '2022-04-25', 'k;kj;ljljljl', 'ihihihihih', '::ffff:127.0.0.1'),
('', 'lhjhihihi', '2018-03-24', '2022-04-25', 'k;kj;ljljljl', 'ihihihihih', '::ffff:127.0.0.1'),
('dzfdzcdvds', 'ohuhuighiugy', '2018-03-24', '2023-05-26', 'jkjhjkbbk', 'ghghgh', '::ffff:127.0.0.1'),
('ojiuhuigy8gt8y', 'kjbkjbkhbjh', '2018-03-24', '2022-04-26', 'lnjkhjkbhbhb', 'njkbkhbhbhjvjh', '::ffff:127.0.0.1'),
('hghghghghghhhkjhhiiuhihiuhihiyhyihyyghghghjg', 'jkhijhhkbhkbhkhj', '2018-03-24', '2021-04-25', 'dlfndklfjldnfkjdnfjld', 'sdkfmklsdnfjkdsnfkj', '::ffff:127.0.0.1'),
('hggh', 'hggh', '2018-03-24', '2020-04-25', 'riyaz', 'riyaz', '::ffff:127.0.0.1'),
('hggh', 'hggh', '2018-03-24', '2020-04-25', 'riyaz', 'riyaz', '::ffff:127.0.0.1'),
('hggh', 'lmlmlmlm,lml', '2018-03-24', '2019-04-25', ';l;kmklmklmlkmklml', ';ml,mlmlmlm', '::ffff:127.0.0.1'),
('hggh', 'lmlmlmlm,lml', '2018-03-24', '2019-04-25', ';l;kmklmklmlkmklml', ';ml,mlmlmlm', '::ffff:127.0.0.1'),
('hggh', 'lmlmlmlm,lml', '2018-03-24', '2019-04-25', ';l;kmklmklmlkmklml', ';ml,mlmlmlm', '::ffff:127.0.0.1'),
('hggh', 'lmlmlmlm,lml', '2018-03-24', '2019-04-25', ';l;kmklmklmlkmklml', ';ml,mlmlmlm', '::ffff:127.0.0.1'),
('hggh', 'lmlmlmlm,lml', '2018-03-24', '2019-04-25', ';l;kmklmklmlkmklml', ';ml,mlmlmlm', '::ffff:127.0.0.1'),
('klklmnlknjkn', 'mljnmlkmnl', '2018-03-24', '2019-04-25', 'bhjvgvghvh', 'jbjbvjvhjg', '::ffff:127.0.0.1'),
('fghjk', 'cfghjkl', '2018-03-24', '0078-06-05', 'rtyuiop', 'hgjkl', '::ffff:127.0.0.1'),
('dfsdhfjksdhfjk', 'ewretryui', '2018-03-24', '0567-03-04', 'dfygujk', 'retyui', '::ffff:127.0.0.1'),
('hghghghghghhhkjhhiiuhihiuhihiyhyihyyghghghjg', 'ddfghj', '2018-03-24', '5678-03-04', 'ghjlk;', 'ghjkl;', '::ffff:127.0.0.1'),
('dfsdhfjksdhfjk', 'asdfghjk', '2018-03-24', '0067-05-04', 'ghjkl;', 'fdghjkl', '::ffff:127.0.0.1'),
('aaaaaaaaaa', 'aaaaaaaaaaa', '2018-03-24', '0006-05-31', 'dfghjk;lllllllllllllllllllllllllll', 'aaaaaaaaaaaaa', '::ffff:127.0.0.1'),
('bbbbbbbbbbbb', 'bbbbbbbbb', '2018-03-24', '0078-06-05', 'ertfygui', 'eghjk', '::ffff:127.0.0.1'),
('aaaaaaaaaa', 'aaaaaaaaaa', '2018-03-24', '0567-04-23', 'sdfghj', 'sdf', '::ffff:127.0.0.1'),
('dfsdhfjksdhfjk', 'dfghjk', '2018-03-24', '0678-05-04', 'asdfghjkl', 'sertjk', '::ffff:127.0.0.1'),
('dfsdhfjksdhfjk', 'eryi789p', '2018-03-24', '0006-05-04', 'sdfgh', 'sdftyu', '::ffff:127.0.0.1'),
('dfsdhfjksdhfjk', 'etry6789', '2018-03-24', '0678-05-31', 'sedrftgyu', 'rty', '::ffff:127.0.0.1'),
('dfsdhfjksdhfjk', 'a', '2018-03-24', '0006-05-31', 'scdfv', 'aa', '::ffff:127.0.0.1'),
('dfsdhfjksdhfjk', 'a', '2018-03-24', '0006-05-31', 'sedrfg', 'sdsfv', '::ffff:127.0.0.1'),
('dfsdhfjksdhfjk', 'dfhghkj', '2018-03-24', '0056-05-04', 'sfdgfh', 'dgfhgjy', '::ffff:127.0.0.1'),
('dfsdhfjksdhfjk', 'a', '2018-03-24', '0067-05-31', 'asdfghj', 'sj', '::ffff:127.0.0.1'),
('dfsdhfjksdhfjk', 'fd', '2018-03-24', '0054-06-05', 'dfg', 'fghj', '::ffff:127.0.0.1'),
('dfsdhfjksdhfjk', 'jhk', '2018-03-24', '0005-05-04', '546', 'fgh', '::ffff:127.0.0.1'),
('dfsdhfjksdhfjk', 'rt', '2018-03-24', '0067-05-31', 'efgt', 'egt', '::ffff:127.0.0.1'),
('dfsdhfjksdhfjk', 'sdf', '2018-03-24', '0067-05-04', 'werty', 'erty', '::ffff:127.0.0.1'),
('dfsdhfjksdhfjk', 'sdf', '2018-03-24', '0067-05-04', 'werty', 'erty', '::ffff:127.0.0.1'),
('dfsdhfjksdhfjk', 'axscf', '2018-03-24', '0078-06-05', 'adsfegrt', 'egrtyu', '::ffff:127.0.0.1'),
('dfsdhfjksdhfjk', 'axscf', '2018-03-24', '0078-06-05', 'adsfegrt', 'egrtyu', '::ffff:127.0.0.1'),
('dfsdhfjksdhfjk', 'drtu', '2018-03-24', '0006-05-31', 'rty', 'rt', '::ffff:127.0.0.1'),
('dfsdhfjksdhfjk', 'aswfert', '2018-03-24', '0006-05-31', 'adsfegrt', 'er5', '::ffff:127.0.0.1'),
('dfsdhfjksdhfjk', 'asfegrty', '2018-03-24', '0006-04-05', 'sfgrfy', 'ert', '::ffff:127.0.0.1'),
('dfsdhfjksdhfjk', 'xcfhgyhui', '2018-03-24', '0678-05-31', 'seryyu', 'sfdgftyu', '::ffff:127.0.0.1'),
('dfsdhfjksdhfjk', 'dgxfhcyu', '2018-03-24', '0000-00-00', 'sadsfdgf', 'sfdgfrt', '::ffff:127.0.0.1'),
('dfsdhfjksdhfjk', 'assa', '2018-03-24', '0065-05-05', 'fghjk', 'gfhjk', '::ffff:127.0.0.1'),
('dfsdhfjksdhfjk', 'ghjk', '2018-03-24', '0056-03-04', 'gfhjkl', 'ghjk', '::ffff:127.0.0.1'),
('dfsdhfjksdhfjk', 'bfcghjk', '2018-03-24', '0006-05-04', 'sdrt', 'sdfghj', '::ffff:127.0.0.1'),
('Kumb mela', 'riyaz', '2018-03-24', '2021-02-02', 'jdkfhjkdshfjk', 'sdifhjkds', '::ffff:127.0.0.1'),
('Kumb mela', 'dfdsfds', '2018-03-24', '2020-01-01', 'asdfghj', 'dfdfds', '::ffff:127.0.0.1'),
('aaaaaaaaaaaaaa', 'aaa', '2018-03-24', '0056-05-31', 'sdfgh', 'edgfghj', '::ffff:127.0.0.1'),
('klklmnlknjkn', 'wert', '2018-03-24', '5678-06-04', 'efgrftyu', 'ertyu', '::ffff:127.0.0.1');

-- --------------------------------------------------------

--
-- Table structure for table `content`
--

CREATE TABLE `content` (
  `activity_id` varchar(1000) NOT NULL,
  `media_url` varchar(1000) NOT NULL,
  `thumbnail_url` varchar(1000) DEFAULT NULL,
  `type` text NOT NULL,
  `media_id` varchar(1000) NOT NULL,
  `posted_on` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `content`
--

INSERT INTO `content` (`activity_id`, `media_url`, `thumbnail_url`, `type`, `media_id`, `posted_on`) VALUES
('hggh', '.\\\\gallery\\kmlkmlkmkl\\file-1521738022574.mp4', NULL, 'png', 'download.png', '2018-03-22'),
('hggh', '.\\\\gallery\\kmlkmlkmkl\\file-1521738022574.mp4', NULL, 'mp4', '11381274_941871652511183_1848175076_n.mp4', '2018-03-22'),
('hggh', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521742090070.png', NULL, 'png', 'download.png', '2018-03-22'),
('hggh', '.\\\\gallery\\klklmnlknjkn\\file-1521746728786.jpg', NULL, 'jpg', '9098915994031840732.jpg', '2018-03-23'),
('dzfdzcdvds', '.\\\\gallery\\hggh\\file-1521830685567.png', NULL, 'png', 'download.png', '2018-03-24'),
('dzfdzcdvds', '.\\\\gallery\\hggh\\file-1521830685567.png', NULL, 'png', 'googlelogo_color_272x92dp.png', '2018-03-24'),
('smdflmndjfnjdsnfjk', '.\\\\gallery\\hggh\\file-1521830821079.jpg', NULL, 'jpg', 'IMG_20171231_080652.jpg', '2018-03-24'),
('smdflmndjfnjdsnfjk', '.\\\\gallery\\hggh\\file-1521830821079.jpg', NULL, 'jpg', 'IMG_20171231_080417.jpg', '2018-03-24'),
('mnmdsnfksdnkfn', '.\\\\gallery\\.d,dsmklfnsdlcndslcnvlsd\\file-1521831099902.jpg', NULL, 'jpg', 'IMG_20171231_080652.jpg', '2018-03-24'),
('mnmdsnfksdnkfn', '.\\\\gallery\\.d,dsmklfnsdlcndslcnvlsd\\file-1521831099902.jpg', NULL, 'jpg', 'IMG_20171231_080417.jpg', '2018-03-24'),
('lhjhihihi', '.\\\\gallery\\\\file-1521832597280.png', NULL, 'png', 'man (1).png', '2018-03-24'),
('lhjhihihi', '.\\\\gallery\\\\file-1521832597280.png', NULL, 'png', 'download.png', '2018-03-24'),
('ohuhuighiugy', '.\\\\gallery\\dzfdzcdvds\\file-1521833067850.png', NULL, 'png', 'download.png', '2018-03-24'),
('ohuhuighiugy', '.\\\\gallery\\dzfdzcdvds\\file-1521833067850.png', NULL, 'png', 'googlelogo_color_272x92dp.png', '2018-03-24'),
('ohuhuighiugy', '.\\\\gallery\\dzfdzcdvds\\file-1521833067850.png', NULL, 'png', 'dffdsfdsfd (1).png', '2018-03-24'),
('kjbkjbkhbjh', '.\\\\gallery\\ojiuhuigy8gt8y\\file-1521833476592.mp4', NULL, 'png', 'googlelogo_color_272x92dp.png', '2018-03-24'),
('kjbkjbkhbjh', '.\\\\gallery\\ojiuhuigy8gt8y\\file-1521833476592.mp4', NULL, 'mp4', '11381274_941871652511183_1848175076_n.mp4', '2018-03-24'),
('kjbkjbkhbjh', '.\\\\gallery\\ojiuhuigy8gt8y\\file-1521833476592.mp4', NULL, 'png', 'man (1).png', '2018-03-24'),
('kjbkjbkhbjh', '.\\\\gallery\\ojiuhuigy8gt8y\\file-1521833476592.mp4', NULL, 'png', 'download.png', '2018-03-24'),
('jkhijhhkbhkbhkhj', '.\\\\gallery\\hghghghghghhhkjhhiiuhihiuhihiyhyihyyghghghjg\\file-1521834862898.png', NULL, 'png', 'download.png', '2018-03-24'),
('hggh', '.\\\\gallery\\hggh\\file-1521836567066.png', NULL, 'png', 'dffdsfdsfd (1).png', '2018-03-24'),
('hggh', '.\\\\gallery\\hggh\\file-1521836856768.png', NULL, 'png', 'dffdsfdsfd (1).png', '2018-03-24'),
('mljnmlkmnl', 'https://youtu.be/Cc1ValOhv6o', NULL, 'live', 'live', '2018-03-24'),
('cfghjkl', '.\\\\gallery\\fghjk\\file-1521894127401.jpg', NULL, 'jpg', '?+91 84287 79678? 20170426_172359.jpg', '2018-03-24'),
('ewretryui', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521894730547.jpg', NULL, 'jpg', '?+91 84287 79678? 20170426_172359.jpg', '2018-03-24'),
('ddfghj', '.\\\\gallery\\hghghghghghhhkjhhiiuhihiuhihiyhyihyyghghghjg\\file-1521894803305.jpg', NULL, 'jpg', '?+91 84287 79678? 20170812_145600.jpg', '2018-03-24'),
('asdfghjk', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521895477398.jpg', NULL, 'jpg', '1a3b7f7ef21db17b27ab170918f9e0ee.jpg', '2018-03-24'),
('aaaaaaaaaaa', '.\\\\gallery\\aaaaaaaaaa\\file-1521896940261.jpg', NULL, 'jpg', '?+91 84287 79678? 20170426_172359.jpg', '2018-03-24'),
('aaaaaaaaaaa', '.\\\\gallery\\aaaaaaaaaa\\file-1521896940261.jpg', NULL, 'jpg', '?+91 84287 79678? 20170604_195333.jpg', '2018-03-24'),
('aaaaaaaaaaa', '.\\\\gallery\\aaaaaaaaaa\\file-1521896940261.jpg', NULL, 'jpg', '?+91 84287 79678? 20170525_100405.jpg', '2018-03-24'),
('aaaaaaaaaaa', '.\\\\gallery\\aaaaaaaaaa\\file-1521896940261.jpg', NULL, 'jpg', '?+91 84287 79678? 20170502_164226.jpg', '2018-03-24'),
('aaaaaaaaaaa', '.\\\\gallery\\aaaaaaaaaa\\file-1521896940261.jpg', NULL, 'jpg', '?+91 84287 79678? 20170812_145600.jpg', '2018-03-24'),
('bbbbbbbbb', '.\\\\gallery\\bbbbbbbbbbbb\\file-1521897912712.jpg', NULL, 'jpg', '2017-03-19-18-46-36-641.jpg', '2018-03-24'),
('bbbbbbbbb', '.\\\\gallery\\bbbbbbbbbbbb\\file-1521897912712.jpg', NULL, 'jpg', '2017-03-19-18-47-04-324.jpg', '2018-03-24'),
('bbbbbbbbb', '.\\\\gallery\\bbbbbbbbbbbb\\file-1521897912712.jpg', NULL, 'jpg', '2017-03-19-18-47-49-024.jpg', '2018-03-24'),
('aaaaaaaaaa', '.\\\\gallery\\aaaaaaaaaa\\file-1521899945687.mp4', NULL, 'mp4', '2017-01-14-09-33-52-726.mp4', '2018-03-24'),
('dfghjk', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521900025796.mp4', NULL, 'mp4', '2017-05-19-15-34-55-043.mp4', '2018-03-24'),
('eryi789p', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521900094125.mp4', NULL, 'mp4', 'Vidya_Vox_-_Love_Me_Like_You_Do___Hosanna.mp4', '2018-03-24'),
('etry6789', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521900155917.mp4', NULL, 'mp4', '2017-01-14-09-33-52-726.mp4', '2018-03-24'),
('etry6789', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521900155917.mp4', NULL, 'mp4', '2017-05-19-15-39-10-206.mp4', '2018-03-24'),
('etry6789', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521900155917.mp4', NULL, 'mp4', 'VID-20170201-WA0012.mp4', '2018-03-24'),
('a', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521900958020.jpg', NULL, 'jpg', '?+91 84287 79678? 20170426_172359.jpg', '2018-03-24'),
('a', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521900976403.jpg', NULL, 'jpg', '1a3b7f7ef21db17b27ab170918f9e0ee.jpg', '2018-03-24'),
('dfhghkj', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521901104353.jpg', NULL, 'jpg', '2016-10-08-21-03-43-523.jpg', '2018-03-24'),
('dfhghkj', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521901104353.jpg', NULL, 'jpg', '2016-10-08-21-07-10-614.jpg', '2018-03-24'),
('dfhghkj', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521901104353.jpg', NULL, 'jpg', '2016-10-08-21-26-30-100.jpg', '2018-03-24'),
('a', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521901161254.jpg', NULL, 'jpg', 'WP_20160727_19_25_37_Pro.jpg', '2018-03-24'),
('a', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521901161254.jpg', NULL, 'jpg', 'WP_20160727_19_25_52_Pro.jpg', '2018-03-24'),
('fd', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521901662011.jpg', NULL, 'jpg', '?+91 84287 79678? 20170426_172359.jpg', '2018-03-24'),
('fd', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521901662011.jpg', NULL, 'jpg', '?+91 84287 79678? 20170502_164226.jpg', '2018-03-24'),
('fd', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521901662011.jpg', NULL, 'jpg', '?+91 84287 79678? 20170525_100405.jpg', '2018-03-24'),
('jhk', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521901809270.jpg', NULL, 'jpg', '?+91 84287 79678? 20170426_172359.jpg', '2018-03-24'),
('jhk', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521901809270.jpg', NULL, 'jpg', '?+91 84287 79678? 20170502_164226.jpg', '2018-03-24'),
('aswfert', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521903130755.jpg', NULL, 'jpg', '1a3b7f7ef21db17b27ab170918f9e0ee.jpg', '2018-03-24'),
('aswfert', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521903130755.jpg', NULL, 'jpg', '2016-08-26-09-21-27-294.jpg', '2018-03-24'),
('asfegrty', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521903254105.jpg', NULL, 'jpg', '1a3b7f7ef21db17b27ab170918f9e0ee.jpg', '2018-03-24'),
('asfegrty', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521903254647.png', NULL, 'png', '9f680491-6095-4e92-a700-333e9a95b09e.png', '2018-03-24'),
('xcfhgyhui', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521903304038.mp4', NULL, 'mp4', '2017-01-14-09-33-52-726.mp4', '2018-03-24'),
('xcfhgyhui', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521903306024.mp4', NULL, 'mp4', '2017-05-19-15-34-55-043.mp4', '2018-03-24'),
('dgxfhcyu', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521903483569.mp4', NULL, 'mp4', '2017-01-14-09-33-52-726.mp4', '2018-03-24'),
('dgxfhcyu', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521903484096.mp4', NULL, 'mp4', '2017-05-19-15-34-55-043.mp4', '2018-03-24'),
('dgxfhcyu', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521903484863.mp4', NULL, 'mp4', '2017-05-19-15-36-08-417.mp4', '2018-03-24'),
('dgxfhcyu', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521903485370.mp4', NULL, 'mp4', '2017-05-19-15-37-25-052.mp4', '2018-03-24'),
('dgxfhcyu', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521903485834.mp4', NULL, 'mp4', '2017-05-19-15-38-08-944.mp4', '2018-03-24'),
('assa', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521904701569.jpg', NULL, 'jpg', '?+91 84287 79678? 20170426_172359.jpg', '2018-03-24'),
('assa', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521904702464.mp4', NULL, 'mp4', '2017-01-14-09-33-52-726.mp4', '2018-03-24'),
('ghjk', 'https://youtu.be/HykviMGfPzg', NULL, 'live', 'live', '2018-03-24'),
('bfcghjk', '.\\\\gallery\\dfsdhfjksdhfjk\\file-1521908320316.jpg', NULL, 'jpg', '1d822dde0983b7d457fa042f1eec6089.jpg', '2018-03-24'),
('riyaz', '.\\\\gallery\\Kumb mela\\file-1521909969140.jpg', NULL, 'jpg', '?+91 84287 79678? 20170426_172359.jpg', '2018-03-24'),
('riyaz', '.\\\\gallery\\Kumb mela\\file-1521909970450.png', NULL, 'png', '9f680491-6095-4e92-a700-333e9a95b09e.png', '2018-03-24'),
('dfdsfds', '.\\\\gallery\\Kumb mela\\file-1521910029148.mp4', NULL, 'mp4', '2017-01-14-09-33-52-726.mp4', '2018-03-24'),
('aaa', '.\\\\gallery\\aaaaaaaaaaaaaa\\file-1521912065741.png', NULL, 'png', '9f680491-6095-4e92-a700-333e9a95b09e.png', '2018-03-24'),
('wert', '.\\\\gallery\\klklmnlknjkn\\file-1521912099435.jpg', NULL, 'jpg', '1d822dde0983b7d457fa042f1eec6089.jpg', '2018-03-24'),
('wert', '.\\\\gallery\\klklmnlknjkn\\file-1521912100102.jpg', NULL, 'jpg', '?+91 84287 79678? 20170426_172359.jpg', '2018-03-24');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
