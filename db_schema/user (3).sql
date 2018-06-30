-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 01, 2018 at 05:29 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `accountNo` text,
  `panNo` text,
  `aadharNo` text,
  `ifscCode` text,
  `hire` int(255) DEFAULT NULL,
  `vendorCode` text,
  `days` int(255) DEFAULT NULL,
  `item` text,
  `amount` text,
  `description` text,
  `purchaseDate` date DEFAULT NULL,
  `giftGivenDate` date DEFAULT NULL,
  `name` text,
  `surveyNo` text,
  `type` text,
  `payable` int(11) DEFAULT NULL,
  `transactionId` int(255) NOT NULL,
  `transactionDate` date DEFAULT NULL,
  `rentPeriod` int(255) DEFAULT NULL,
  `toDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`accountNo`, `panNo`, `aadharNo`, `ifscCode`, `hire`, `vendorCode`, `days`, `item`, `amount`, `description`, `purchaseDate`, `giftGivenDate`, `name`, `surveyNo`, `type`, `payable`, `transactionId`, `transactionDate`, `rentPeriod`, `toDate`) VALUES
('sedrty', 'rtyu', 'ertyu', 'we4r5t6', 0, NULL, 0, 'er5t', 'ertyu', 'rtyui', NULL, '0000-00-00', NULL, '', '', 1, 20180000, '0067-05-31', NULL, NULL),
('AWDEFR5Y6ad', 'ERTYUwd', 'SDFGHJKwde', 'SDRFGHJ', 2, '', 0, 'DFRTH', 'FGHJ', 'FGTYHUJKO', '0000-00-00', '0067-05-31', NULL, '', '', 1, 20180001, NULL, NULL, NULL),
('456789', '4567890', 'erftyui', 'erty', 0, '', 0, '', 'ertyul', '', '0000-00-00', '0000-00-00', NULL, 'dwsfetgrtyu', '', 0, 20180002, NULL, NULL, NULL),
('wfegrt', 'wer5tyu', 'ertyu', 'we4rty', 0, 'ertyu', 0, 'wertyu', 'wertyujk', 'ertyui', '0678-05-04', '0000-00-00', NULL, '', '', 1, 20180003, '0067-05-31', NULL, NULL),
('wfegrt', 'wer5tyu', 'ertyu', 'we4rty', 0, 'ertyu', 0, 'wertyu', 'wertyujk', 'ertyui', '0678-05-04', '0000-00-00', NULL, '', '', 1, 20180004, '0067-05-31', NULL, NULL),
('324567890', '6787989p0-987', '2435678', '6576788o9', 0, 'dgfhjhkj', 0, 'rtyui', '4657687', 'sfdgfhgjhjkl', '0067-03-04', '0000-00-00', NULL, '', '', 1, 20180005, '6578-04-05', NULL, NULL),
('12314214324324543543', '32142121521', '12421515353', '4214325325', 1, 'waegfe', 5, 'zdvds', '3000', 'Test Description', '0000-00-00', '0000-00-00', NULL, '', '', 1, 20180006, '2018-04-06', 0, '0000-00-00'),
('12314214324324543543', '32142121521', '12421515353', '4214325325', 1, 'waegfe', 5, 'zdvds', '3000', 'Test Description', '0000-00-00', '0000-00-00', NULL, '', '', 1, 20180007, '2018-04-06', 0, '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `activity`
--

CREATE TABLE `activity` (
  `activity_id` varchar(1000) NOT NULL,
  `activity_name` varchar(1000) NOT NULL,
  `sdate` date NOT NULL,
  `edate` date NOT NULL,
  `comments` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `activity`
--

INSERT INTO `activity` (`activity_id`, `activity_name`, `sdate`, `edate`, `comments`) VALUES
('riyaz', 'jkkbhjb', '2018-02-12', '2018-02-14', NULL),
('janani', 'kjjnkjn', '2018-02-05', '2018-02-13', 'mnm'),
('test', 'test', '2018-02-01', '2018-02-14', 'hello this is yest comments');

-- --------------------------------------------------------

--
-- Table structure for table `bank_details`
--

CREATE TABLE `bank_details` (
  `user_id` varchar(10) NOT NULL,
  `accountNo` varchar(25) NOT NULL,
  `ifscCode` varchar(20) NOT NULL,
  `panNo` varchar(20) NOT NULL,
  `adharNo` varchar(25) NOT NULL,
  `dateJoining` date NOT NULL,
  `monthlySalary` bigint(20) NOT NULL,
  `department` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bank_details`
--

INSERT INTO `bank_details` (`user_id`, `accountNo`, `ifscCode`, `panNo`, `adharNo`, `dateJoining`, `monthlySalary`, `department`) VALUES
('20180010', '435634', '436436', '3252', '43543', '2018-03-07', 1233, '46'),
('20180034', 'sdrt', 'rtyui', 'drftyu', 'rfty', '0067-05-31', 0, 'dfghj'),
('20180036', 'ertyui', 'rtyuio', 'dfghjk', 'ertyui', '0067-05-31', 0, 'ertyui'),
('20180061', 'ftgjyh', 'tjgfj', 'dtjyf', 'ftjnyfvhy', '0006-04-05', 0, 'fjg'),
('20180062', 'gkmgbh', 'fjgbjmf', 'khu', 'gjmgh', '0056-07-05', 0, 'fjgv');

-- --------------------------------------------------------

--
-- Table structure for table `card_details`
--

CREATE TABLE `card_details` (
  `user_id` varchar(10) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `sex` varchar(5) DEFAULT NULL,
  `age` int(150) DEFAULT NULL,
  `phone` varchar(12) DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL,
  `path` varchar(500) DEFAULT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `card_details`
--

INSERT INTO `card_details` (`user_id`, `name`, `sex`, `age`, `phone`, `image`, `path`, `type`) VALUES
('20180000', 'n,eanrkwltelll rnktlh;', 'Male', 345, '2345', NULL, 'images\\image-1517693967186.jpg', ''),
('20180001', 'dmfng, kertjl', 'Male', 3, '2345', NULL, 'images\\image-1517694117996.jpg', ''),
('20180002', 'dmfng, kertjl', 'Male', 3, '2345', NULL, 'images\\image-1517694117996.jpg', ''),
('20180007', 'dasef srfr', NULL, NULL, NULL, NULL, NULL, 'employee'),
('20180010', 'AWrw d', NULL, NULL, NULL, NULL, NULL, 'employee'),
('20180013', 'Test taewtea wafeasa', 'Choos', NULL, NULL, NULL, 'dp_images\\image-1520176225415.jpg', 'user'),
('20180014', 'jegan Nathan', NULL, NULL, NULL, NULL, NULL, 'employee'),
('20180015', 'Jegan Jegan', 'Choos', NULL, NULL, NULL, 'dp_images\\image-1520177153221.jpg', 'user'),
('20180016', 'jegan Nathan', NULL, NULL, NULL, NULL, NULL, 'employee'),
('20180023', 'undefined undefined', 'Choos', NULL, NULL, NULL, 'dp_images\\image-1521377096318.png', ''),
('20180027', 'erty8u9 e45678', 'Femal', 456, '34567', NULL, NULL, ''),
('20180028', 'erty8u9 e45678', 'Femal', 456, '34567', NULL, NULL, ''),
('20180029', 'erty8u9 e45678', 'Femal', 456, '34567', NULL, NULL, ''),
('20180030', 'erty8u9 e45678', 'Femal', 456, '34567', NULL, NULL, ''),
('20180033', '5rt678 rr5678', 'Male', 534, '4567', NULL, NULL, ''),
('20180034', '5rt678 rr5678', 'Male', 534, '4567', NULL, NULL, ''),
('20180035', 'er5y67 ert678', 'Male', 456, '45678', NULL, 'dp_images\\image-1521876202382.jpg', ''),
('20180036', 'rthyjui rtyui', 'Male', 567, '3456789', NULL, NULL, ''),
('20180037', 'janani Anbazhagan', 'Femal', 23, '4567', NULL, 'dp_images\\image-1521879374575.jpg', 'user'),
('20180038', 'aaaaaaa aaaaaaaaaaaaaa', 'Femal', 22, '223456', NULL, 'dp_images\\image-1521880609109.jpg', 'user'),
('20180039', 'xdfgrthyju asfegrtyuio', 'Femal', 345, '34567890', NULL, 'dp_images\\image-1521887979320.jpg', 'user'),
('20180040', 'hgjkl fedghjk', 'Male', 45, '4546789', NULL, 'dp_images\\image-1521895226701.jpg', 'user'),
('20180041', 'jghkl gfhjk', 'Femal', 54, '345678', NULL, 'dp_images\\image-1521907140449.png', 'user'),
('20180042', 'aa aa', 'Femal', 23, '345678', NULL, 'dp_images\\image-1521907732948.png', 'user'),
('20180043', 'dgfhhk gfhjkl', 'Male', 56, '4356789', NULL, 'dp_images\\image-1521908811215.jpg', 'user'),
('20180045', 'as as', 'Femal', 546, '345678', NULL, 'dp_images\\image-1521908956056.jpg', 'user'),
('20180046', 'sdwerhtyj wertyui', 'Femal', 34, '435678', NULL, 'dp_images\\image-1521963179875.jpg', 'user'),
('20180047', 'werty tyu8', 'Male', 435, '345678', NULL, 'dp_images\\image-1521963318477.jpg', 'user'),
('20180048', 'ftgy rtyu', 'Male', 45, '234567', NULL, 'dp_images\\image-1521963728415.jpg', 'user'),
('20180049', 'ert56 erty', 'Male', 3, '3456', NULL, 'dp_images\\image-1521967237616.jpg', 'user'),
('20180050', 'janani A', 'Femal', 23, '9487347678', NULL, 'dp_images\\image-1522506937250.jpg', 'user'),
('20180061', 'wdhkjl; gjhklk;l', 'Femal', 35, '437457', NULL, 'dp_images\\image-1522521666598.jpg', 'employee'),
('20180062', 'gdfr sdgdfg', 'Male', 534, '46457', NULL, 'dp_images\\image-1522522677808.jpg', 'employee'),
('20180075', 'jegan jegan', NULL, 45, NULL, NULL, '', 'user'),
('20180076', 'thu thu', NULL, NULL, NULL, NULL, '', 'user'),
('20180082', 'jeg jeg', NULL, NULL, NULL, NULL, '', 'user'),
('20180083', 'jeg jeg', NULL, NULL, NULL, NULL, '', 'user'),
('20180085', 'Jegan nathan Test Test Last Name', NULL, 34, NULL, NULL, '', 'user'),
('20180087', 'First Name Last Name', NULL, NULL, NULL, NULL, '', 'user'),
('20180088', 'ju ju', NULL, NULL, NULL, NULL, '', 'user'),
('20180089', 'jega jega', NULL, NULL, NULL, NULL, '', 'user');

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
('riyaz', 'nlmnml', 'lkmklmkl', 'klnlkmnkl', 'kjnjnlnl', '0000-00-00'),
('riyaz', 'mnnmn', 'jnjnknk', 'nknkn', 'jknkjnk', '0000-00-00'),
('janani', 'jnjknkjl', 'nlnln', 'lnlnkl', 'nnlnl', '0000-00-00'),
('janani', 'mmlnmlmn', 'nlnlkmn', 'lnklnlk', 'lnjlknjknj', '0000-00-00'),
('test', 'CosmopolitanKadhali.mp4', 'Screenshot.png', 'video', 'myid', '2018-02-04'),
('lknklnklnl', '.\\\\gallery\\lknklnklnl\\file-1520044003352.png', NULL, 'png', '736461.png', '2018-03-03'),
('lknklnklnl', '.\\\\gallery\\lknklnklnl\\file-1520044003352.png', NULL, 'png', '736461.png', '2018-03-03');

-- --------------------------------------------------------

--
-- Table structure for table `education_details`
--

CREATE TABLE `education_details` (
  `degree` varchar(200) DEFAULT NULL,
  `year` int(5) DEFAULT NULL,
  `institution` varchar(200) DEFAULT NULL,
  `user_id` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `education_details`
--

INSERT INTO `education_details` (`degree`, `year`, `institution`, `user_id`) VALUES
('hftgm', 2012, 'gvedb', '20180002'),
('others', 2014, 'vgfdb', '20180006'),
('erwgr', 2014, 'gvedb', '20180007'),
('erwgr', 2012, 'gvedb', '20180008'),
('erwgr', 2014, 'vgfdb', '20180009'),
('erwgr', 2014, 'vgfdb', '20180010'),
('erwgr', 2014, 'vgfdb', '20180011'),
('erwgr', 2014, 'vgfdb', '20180012'),
('hftgm', 2012, 'gvedb', '20180013'),
('erwgr', 2014, 'vgfdb', '20180014'),
('erwgr', 2012, 'gvedb', '20180015'),
('erwgr', 2012, 'gvedb', '20180016'),
('erwgr', 2012, 'gvedb', '20180017'),
('erwgr', 2012, 'gvedb', '20180018'),
('erwgr', 2012, 'gvedb', '20180019'),
('erwgr', 2012, 'gvedb', '20180020'),
('others', 2014, 'gvedb', '20180021'),
('erwgr', 2012, 'gvedb', '20180022'),
('wertyu', 2012, 'gvedb', '20180023'),
('wertyu', 2012, 'gvedb', '20180024'),
('erwgr', 2012, 'vgfdb', '20180025'),
('erwgr', 2012, 'vgfdb', '20180026'),
('others', 2014, 'vgfdb', '20180027'),
('others', 2014, 'vgfdb', '20180028'),
('others', 2014, 'vgfdb', '20180029'),
('others', 2014, 'vgfdb', '20180030'),
('erwgr', 2012, 'gvedb', '20180031'),
('erwgr', 2012, 'gvedb', '20180032'),
('hftgm', 2014, 'gvedb', '20180033'),
('hftgm', 2014, 'gvedb', '20180034'),
('erwgr', 2012, 'vgfdb', '20180035'),
('hftgm', 2014, 'gvedb', '20180036'),
('grty79', 2014, 'gvedb', '20180037'),
('dfrtryu', 2014, 'vgfdb', '20180038'),
('sfdgrftyu', 2014, 'vgfdb', '20180039'),
('sfdgrftyu', 2012, 'gvedb', '20180040'),
('fgfhgjkl;', 2012, 'vgfdb', '20180041'),
('sfdgrftyu', 2012, 'vgfdb', '20180042'),
('M.Tect', 2012, 'vgfdb', '20180043'),
('grty79', 2014, 'gvedb', '20180045'),
('sfdgrftyu', 2014, 'gvedb', '20180046'),
('hftgm', 2014, 'gvedb', '20180047'),
('sfdgrftyu', 2014, 'gvedb', '20180048'),
('sfdgrftyu', 2012, 'ertry', '20180049'),
('B.E', 2014, 'Mepco', '20180050'),
('erwgr', 2014, 'gvedb', '20180051'),
('erwgr', 2014, 'gvedb', '20180052'),
('erwgr', 2012, 'gvedb', '20180053'),
('erwgr', 2012, 'gvedb', '20180054'),
('erwgr', 2012, 'gvedb', '20180055'),
('erwgr', 2012, 'gvedb', '20180056'),
('erwgr', 2012, 'gvedb', '20180057'),
('erwgr', 2012, 'gvedb', '20180058'),
('others', 2012, 'gvedb', '20180059'),
('others', 2012, 'gvedb', '20180060'),
('others', 2012, 'gvedb', '20180061'),
('others', 2014, 'gvedb', '20180062'),
(NULL, NULL, NULL, '20180070'),
(NULL, NULL, NULL, '20180071'),
(NULL, NULL, NULL, '20180072'),
(NULL, NULL, NULL, '20180073'),
(NULL, NULL, NULL, '20180074'),
(NULL, NULL, NULL, '20180075'),
(NULL, NULL, NULL, '20180076'),
(NULL, NULL, NULL, '20180077'),
(NULL, NULL, NULL, '20180078'),
(NULL, NULL, NULL, '20180079'),
(NULL, NULL, NULL, '20180080'),
(NULL, NULL, NULL, '20180081'),
(NULL, NULL, NULL, '20180082'),
(NULL, NULL, NULL, '20180083'),
(NULL, NULL, NULL, '20180084'),
(NULL, NULL, NULL, '20180085'),
(NULL, NULL, NULL, '20180086'),
(NULL, NULL, NULL, '20180087'),
(NULL, NULL, NULL, '20180088'),
(NULL, NULL, NULL, '20180089');

-- --------------------------------------------------------

--
-- Table structure for table `family_details`
--

CREATE TABLE `family_details` (
  `working_status` varchar(200) DEFAULT NULL,
  `comments` varchar(500) DEFAULT NULL,
  `indexVal` int(255) NOT NULL,
  `name` text,
  `relation` varchar(200) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `user_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `family_details`
--

INSERT INTO `family_details` (`working_status`, `comments`, `indexVal`, `name`, `relation`, `dob`, `user_id`) VALUES
('', '', 0, 'fcghj', 'fghj', '2004-06-01', 0),
('tikt7o', '', 0, 'fnhf', 'ry6r', '0036-05-31', 20180061),
('fjg', '', 0, 'fgjmgyh', 'gykhbjk', '0658-07-05', 20180062),
('j', '', 0, 'j', 'h', '2018-04-06', 20180073),
('j', '', 0, 'j', 'h', '2018-04-06', 20180075),
('cbvnm,.', '', 0, 'xcvbhj', 'vcbnm,./', '0789-06-05', 20180076),
(NULL, '', 0, 'father', NULL, NULL, 20180082),
(NULL, '', 0, 'father', NULL, NULL, 20180083),
(NULL, '', 0, 'test', NULL, NULL, 20180085),
(NULL, '', 0, 'Test Fathe', NULL, NULL, 20180087),
(NULL, '', 0, 'ju', NULL, NULL, 20180088),
(NULL, '', 0, 'jega', NULL, NULL, 20180089),
('gfhjkfdghjm,m.', '', 1, 'dgr', 'frmj', '2004-04-30', 0),
('ftghujkl', '', 2, 'Anbazhagan', 'Father', '1964-10-21', 0),
('fgtgyhjkl', '', 3, 'Parasakthi', 'Mother', '1969-05-18', 0),
('fdgfhgjhk', '', 4, 'Parasakthi', 'Mother', '1969-05-18', 0);

-- --------------------------------------------------------

--
-- Table structure for table `login_info`
--

CREATE TABLE `login_info` (
  `user_id` int(255) DEFAULT NULL,
  `name` text,
  `password` text,
  `type` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login_info`
--

INSERT INTO `login_info` (`user_id`, `name`, `password`, `type`) VALUES
(NULL, 'sdfghj', 'sdfghj@1234', 'user'),
(20180022, 'jyhku', 'jyhku@1234', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `login_table`
--

CREATE TABLE `login_table` (
  `user_id` varchar(10) NOT NULL,
  `password` varchar(1000) NOT NULL,
  `type` varchar(10) NOT NULL,
  `salt` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login_table`
--

INSERT INTO `login_table` (`user_id`, `password`, `type`, `salt`) VALUES
('riyaz', '$2a$10$dBjraxY6wy3/YAYWVwG4T.4M2zKBCeXMSDbw/.f91v9liLIX.iC8G', 'admin', ''),
('riyaz', '$2a$10$ykrLjt5DJmHApSbmIbo9JeHWnDSzVCNsTd1jv9/kxeymprc1HRCFi', 'admin', ''),
('jan', 'jan', '', ''),
('janani', '*177420ECFE7C9EC757CC027E53091559921C67AC', 'admin', ''),
('jana', '$2y$10$V9GyDrZ9/F2QzMWDYLnmgejfkq6hU.EhAfuUY8R5P54ujBldwU4XK', 'admin', ''),
('jana', 'jana', 'admin', ''),
('user', 'user', 'user', ''),
('aa', 'aaaa', 'user', ''),
('dgfhhk', 'dgfhhkgfhjkl', 'user', ''),
('as', 'asas', 'user', ''),
('riyaz', 'riyazahamed', 'user', ''),
('sdwerhtyj', 'sdwerhtyjwertyui', 'user', ''),
('werty', 'wertytyu8', 'user', ''),
('ftgy', 'ftgyrtyu', 'user', ''),
('ert56', 'ert56erty', 'user', ''),
('janani', 'jananiA', 'user', ''),
('wdhkjl;', 'wdhkjl;gjhklk;l', 'employee', ''),
('gdfr', 'gdfrsdgdfg', 'employee', ''),
('jegan', 'jeganjegan', 'user', ''),
('jegan', 'jeganjegan', 'user', ''),
('thu', 'thuthu', 'user', ''),
('jeg', 'jegjeg', 'user', ''),
('jeg', 'jegjeg', 'user', ''),
('Jegan nath', 'Jegan nathan TestTest Last Name', 'user', ''),
('First Name', 'First NameLast Name', 'user', ''),
('ju', 'juju', 'user', ''),
('jega', 'jegajega', 'user', ''),
('admin', '$2y$10$SNSXBfD6klZzHJxHShu7xORRSnIse4DLcfUei6BURFZk4nvpxUHKS', 'admin', '');

-- --------------------------------------------------------

--
-- Table structure for table `media_details`
--

CREATE TABLE `media_details` (
  `user_id` varchar(10) NOT NULL,
  `user_image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `occupation_details`
--

CREATE TABLE `occupation_details` (
  `user_id` varchar(10) NOT NULL,
  `type` varchar(100) DEFAULT NULL,
  `company` varchar(100) DEFAULT NULL,
  `designation` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `occupation_details`
--

INSERT INTO `occupation_details` (`user_id`, `type`, `company`, `designation`) VALUES
('20180002', 'Salaried', 'werty', 'erty'),
('20180006', 'Self Employed', 'fhj', 'gjkgl'),
('20180007', 'Salaried', 'cfvghj', 'cvgbhkl'),
('20180008', 'Salaried', 'sadwfegrfhy', 'sfdfghjkl'),
('20180009', 'Self Employed', 'fghjk', 'ghjkl'),
('20180010', 'Self Employed', 'fghjk', 'ghjkl'),
('20180011', 'Salaried', 'gffhjk', 'rtgthjhkjl'),
('20180012', 'Salaried', 'gffhjk', 'rtgthjhkjl'),
('20180013', 'Salaried', 'chgvjhjkk', 'rghjkl'),
('20180014', 'Self Employed', 'fdgfch', 'rtyugkhlij;'),
('20180021', 'Salaried', 'srftgy', 'drftgyhjk'),
('20180022', 'Salaried', 'hjghkljk', 'rtghgjhkj'),
('20180023', 'Choose Salaried/Self Employed', 'wrerti', 'sertyuo'),
('20180024', 'Choose Salaried/Self Employed', 'sdrtyuk', 'ertyui'),
('20180027', 'Salaried', 'wert6y', 'er5678'),
('20180028', 'Salaried', 'wert6y', 'er5678'),
('20180029', 'Salaried', 'wert6y', 'er5678'),
('20180030', 'Salaried', 'wert6y', 'er5678'),
('20180033', 'Salaried', 'ertyu', 'dfghjk'),
('20180034', 'Salaried', 'ertyu', 'dfghjk'),
('20180035', 'Choose Salaried/Self Employed', 'wert', 'rtyu'),
('20180036', 'Salaried', 'drtyui', 'ertyui'),
('20180037', 'Choose Salaried/Self Employed', 'ertyu', 'rty'),
('20180038', 'Choose Salaried/Self Employed', 'fgtbhyjuilop', 'gfhyjukio'),
('20180039', 'Choose Salaried/Self Employed', 'sdfggyu', 'dfgyjkl;'),
('20180040', 'Choose Salaried/Self Employed', 'nhjkl', 'nbjk'),
('20180041', 'Choose Salaried/Self Employed', 'ghjk', 'gfhjkll'),
('20180042', 'Choose Salaried/Self Employed', 'awefgrty', 'fghyuji'),
('20180043', 'Choose Salaried/Self Employed', 'adsdsad', 'sadasdsa'),
('20180045', 'Choose Salaried/Self Employed', 'cfghg', 'efghjk'),
('20180046', 'Choose Salaried/Self Employed', 'sdfgh', 'fghjk'),
('20180047', 'Choose Salaried/Self Employed', 'sd', 's'),
('20180048', 'Choose Salaried/Self Employed', 'ertg', 'sdfgh'),
('20180049', 'Choose Salaried/Self Employed', 'erty', 'dfgh'),
('20180050', 'Choose Salaried/Self Employed', 'Infoview', 'Engineer'),
('20180061', 'Self Employed', 'esgrdtj', 'fmjgyk'),
('20180062', 'Salaried', 'fjmgfh', 'cfjnvgh,k'),
('20180075', 'Choose Salaried/Self Employed', NULL, NULL),
('20180076', 'Choose Salaried/Self Employed', NULL, NULL),
('20180082', 'Choose Salaried/Self Employed', NULL, NULL),
('20180083', 'Choose Salaried/Self Employed', NULL, NULL),
('20180085', 'Choose Salaried/Self Employed', NULL, NULL),
('20180087', 'Choose Salaried/Self Employed', NULL, NULL),
('20180088', 'Choose Salaried/Self Employed', NULL, NULL),
('20180089', 'Choose Salaried/Self Employed', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `personal_details`
--

CREATE TABLE `personal_details` (
  `name` varchar(50) NOT NULL,
  `father_name` varchar(50) DEFAULT NULL,
  `family_name` varchar(50) DEFAULT NULL,
  `nick_name` varchar(50) DEFAULT NULL,
  `age` int(150) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `sex` varchar(6) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `landmark` varchar(100) DEFAULT NULL,
  `phone` varchar(12) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `marital_status` varchar(50) DEFAULT NULL,
  `wedding_date` date DEFAULT NULL,
  `user_id` varchar(10) NOT NULL,
  `city` varchar(1000) DEFAULT NULL,
  `country` varchar(1000) DEFAULT NULL,
  `postal_code` varchar(10000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `personal_details`
--

INSERT INTO `personal_details` (`name`, `father_name`, `family_name`, `nick_name`, `age`, `dob`, `sex`, `address`, `landmark`, `phone`, `email`, `marital_status`, `wedding_date`, `user_id`, `city`, `country`, `postal_code`) VALUES
('dmfng,', 'kertjl', NULL, NULL, 3, '0567-04-23', 'Male', 'swdefrgt', NULL, '2345', 'bnmm@gjh.com', 'Married', NULL, '20180002', 'sd', 'dfg', '435667'),
('jskfxg', 'gbfrhngcj', NULL, NULL, 22, '0543-03-24', 'Femal', 'zfvxdgb', NULL, '4354657678', 'xvc@ngjkd.com', 'unmarried', NULL, '20180006', 'dxhdrj', 'fcjfgtk', '35645786'),
('gkgyk', 'kgbjul', NULL, NULL, 55, '0758-06-05', 'Femal', '754detrt', NULL, '534656789', 'asfdgfrtgy@hj.com', 'unmarried', NULL, '20180007', 'etyr', 'edy', '4657678'),
('sertyuwet4r5', 'swedrtyui', NULL, NULL, 345, '0000-00-00', 'Femal', 'qewrert6y', NULL, '3456789', 'er@jhk.com', 'unmarried', NULL, '20180008', 'wretrtyu', 'wetrtyu', '56780'),
('dsfxghj', 'ghjk', NULL, NULL, 54, '0567-03-04', 'Femal', 'sfdgfhgjhk', NULL, '435667890', 'cgfgf@gfh.com', 'Married', NULL, '20180009', 'rtghgjhklk', 'dsfgfhgjhk', '456'),
('dsfxghj', 'ghjk', NULL, NULL, 54, '0567-03-04', 'Femal', 'sfdgfhgjhk', NULL, '435667890', 'cgfgf@gfh.com', 'Married', NULL, '20180010', 'rtghgjhklk', 'dsfgfhgjhk', '456'),
('hgjhk', 'gfhjk', NULL, NULL, 56, '0565-05-04', 'Femal', 'dghfjgkh', NULL, '43546768', 'gff@dft.com', 'Married', NULL, '20180011', 'gfhgjh', 'hfgjh', '2435467687'),
('hgjhk', 'gfhjk', NULL, NULL, 56, '0565-05-04', 'Femal', 'dghfjgkh', NULL, '43546768', 'gff@dft.com', 'Married', NULL, '20180012', 'gfhgjh', 'hfgjh', '2435467687'),
('gdhfgjhkj', 'hfgjkhljk', NULL, NULL, 546, '0667-05-04', 'Femal', 'cfhgvjhbmj,', NULL, '4567689', 'nvvh@ghm.com', 'unmarried', NULL, '20180013', 'cfbvnn', 'ghgjhk', '45678'),
('hgjk', 'rgfhj', NULL, NULL, 456, '0056-03-04', 'Male', 'dgfhjk', NULL, '456789', 'rtg@gfhg.com', 'unmarried', NULL, '20180014', 'erdgfhgj', 'rt', '4354678'),
('tfhyg', 'rtyjukil', NULL, NULL, 546, '0000-00-00', 'Femal', 'dgfhj', NULL, '435465768', 'fdgf@fgh.com', 'unmarried', NULL, '20180015', 'rdfhgjykh', 'rthfjgkh', '567689'),
('tfhyg', 'rtyjukil', NULL, NULL, 546, '0000-00-00', 'Femal', 'dgfhj', NULL, '435465768', 'fdgf@fgh.com', 'unmarried', NULL, '20180016', 'rdfhgjykh', 'rthfjgkh', '567689'),
('tfhyg', 'rtyjukil', NULL, NULL, 546, '0000-00-00', 'Femal', 'dgfhj', NULL, '435465768', 'fdgf@fgh.com', 'unmarried', NULL, '20180017', 'rdfhgjykh', 'rthfjgkh', '567689'),
('tfhyg', 'rtyjukil', NULL, NULL, 546, '0000-00-00', 'Femal', 'dgfhj', NULL, '435465768', 'fdgf@fgh.com', 'unmarried', NULL, '20180018', 'rdfhgjykh', 'rthfjgkh', '567689'),
('tfhyggjhk', 'tuyuihgfdfghj', NULL, NULL, 546, '0000-00-00', 'Femal', 'dgfhj', NULL, '435465768', 'fdgf@fgh.com', 'unmarried', NULL, '20180019', 'rdfhgjykh', 'rthfjgkh', '567689'),
('tfhyggjhk', 'tuyuihgfdfghj', NULL, NULL, 546, '0000-00-00', 'Femal', 'dgfhj', NULL, '435465768', 'fdgf@fgh.com', 'unmarried', NULL, '20180020', 'rdfhgjykh', 'rthfjgkh', '567689'),
('sdfghj', 'sdfghjn', NULL, NULL, 234, '0000-00-00', 'Male', 'sdasfdfgh', NULL, '234567', 'sd@yjhkj.com', 'Married', NULL, '20180021', 'ased', 'sdfgh', '2334456'),
('jyhku', 'tfgjhk', NULL, NULL, 56, '0578-06-04', 'Male', 'hgjhkl', NULL, '34567', 'fg@fgf.com', 'unmarried', NULL, '20180022', 'srftgyjh', 'rdfhgjhk', '343567'),
('sdfrtgyuio', 'wer5t6ui', ' ', ' ', 12, '0045-03-12', 'Male', 'wsedfthk', ' ', '34567', 'sdfg@fg.com', 'unmarried', '0000-00-00', '20180023', 'sderftyui', 'dfghjk', '2345'),
('e234567i89', '4657679p', ' ', ' ', 5465678, '0000-00-00', 'Male', '3w4e5r6t7ui', ' ', '456789', 'thy@rtrty', 'unmarried', '0000-00-00', '20180024', 'e4r5t678', 'ery5t6y7ui', '56789'),
('34567', 'ert678', ' ', ' ', 3456, '0006-05-31', 'Male', 'wer567', ' ', '34567', 'sr@ghj', 'unmarried', '0000-00-00', '20180025', 'ert', 'er567', '4567'),
('34567', 'ert678', ' ', ' ', 3456, '0006-05-31', 'Male', 'wer567', ' ', '34567', 'sr@ghj', 'unmarried', '0000-00-00', '20180026', 'ert', 'er567', '4567'),
('erty8u9', 'e45678', ' ', ' ', 456, '0678-05-04', 'Femal', 'awertyu', ' ', '34567', 'ert@fg', 'Married', '0000-00-00', '20180027', 'sdfghj', 'sedrty', '45678'),
('erty8u9', 'e45678', ' ', ' ', 456, '0678-05-04', 'Femal', 'awertyu', ' ', '34567', 'ert@fg', 'Married', '0000-00-00', '20180028', 'sdfghj', 'sedrty', '45678'),
('erty8u9', 'e45678', ' ', ' ', 456, '0678-05-04', 'Femal', 'awertyu', ' ', '34567', 'ert@fg', 'Married', '0000-00-00', '20180029', 'sdfghj', 'sedrty', '45678'),
('erty8u9', 'e45678', ' ', ' ', 456, '0678-05-04', 'Femal', 'awertyu', ' ', '34567', 'ert@fg', 'Married', '0000-00-00', '20180030', 'sdfghj', 'sedrty', '45678'),
('23456789', 'e456789', ' ', ' ', 456, '0678-05-31', 'Male', 'w3456', ' ', '45678', 'wer@hvn', 'Married', '0000-00-00', '20180031', 'wertyu', 'er6', '5678'),
('23456789', 'e456789', ' ', ' ', 456, '0678-05-31', 'Male', 'w3456', ' ', '45678', 'wer@hvn', 'Married', '0000-00-00', '20180032', 'wertyu', 'er6', '5678'),
('5rt678', 'rr5678', ' ', ' ', 534, '0465-06-04', 'Male', 'wretry6', ' ', '4567', 'dft@efg', 'Married', '0000-00-00', '20180033', 'ert678', 'erty', '456'),
('5rt678', 'rr5678', ' ', ' ', 534, '0465-06-04', 'Male', 'wretry6', ' ', '4567', 'dft@efg', 'Married', '0000-00-00', '20180034', 'ert678', 'erty', '456'),
('er5y67', 'ert678', ' ', ' ', 456, '0678-05-31', 'Male', 'e4r5678', ' ', '45678', 'ert@ghj', 'unmarried', '0000-00-00', '20180035', 'ert6y7', 'rty', '345678'),
('rthyjui', 'rtyui', ' ', ' ', 567, '0066-05-31', 'Male', 'ertyui', ' ', '3456789', 'dfg@df', 'unmarried', '0000-00-00', '20180036', 'rty', 'rtyui', '834567'),
('janani', 'Anbazhagan', ' ', ' ', 23, '2018-03-24', 'Femal', 'wert', ' ', '4567', 'sdfgh@rgth', 'unmarried', '0000-00-00', '20180037', 'r', 'rt', '4546'),
('wretrytyiuiopdrtfgyuiopl', 'aaaaaaaaaaaaaa', '', '', 22, '2043-04-20', 'Male', 'derfgty', '', '223456', 'fv@ty', 'Married', '0000-00-00', '20180038', 'sdfgty', 'sdrfty', '34567'),
('xdfgrthyju', 'asfegrtyuio', '', '', 345, '2031-06-04', 'Femal', 'ewr5yi', '', '34567890', 'dfg@fghj', 'unmarried', '0000-00-00', '20180039', 'rtyuio', 'rtyui', '3456789'),
('hgjkl', 'fedghjk', ' ', ' ', 45, '0056-03-04', 'Male', 'vhgjkl', ' ', '4546789', 'dfg@sdf', 'unmarried', '0000-00-00', '20180040', 'cghjk', 'bvnm', '3245678'),
('jghkl', 'gfhjk', ' ', ' ', 54, '0678-05-04', 'Femal', 'fgfhgjhk', ' ', '345678', 'fdg@dfgh', 'Married', '0000-00-00', '20180041', 'ertyu', 'retyu', '45678'),
('aa', 'aa', ' ', ' ', 23, '0067-05-31', 'Femal', 'wertyu', ' ', '345678', 'sd@fg', 'Married', '0000-00-00', '20180042', 'grft6', 'ergtyu', '456789'),
('dgfhhk', 'gfhjkl', ' ', ' ', 56, '0006-04-05', 'Male', 'dfghjk', ' ', '4356789', 'ssr@gmail.com', 'Married', '0000-00-00', '20180043', 'gfhjkl', 'ghjkl', '456789'),
('ghjk', 'nbjmk.', ' ', ' ', 546, '0789-05-06', 'Femal', 'fsgdhjkl', ' ', NULL, NULL, 'Married', '0000-00-00', '20180044', 'gfhjkl', 'edfgh', '65788'),
('as', 'as', ' ', ' ', 546, '0789-05-06', 'Femal', 'fsgdhjkl', ' ', '345678', 'er@fdgh', 'Married', '0000-00-00', '20180045', 'gfhjkl', 'edfgh', '65788'),
('sdwerhtyj', 'wertyui', ' ', ' ', 34, '0067-05-31', 'Femal', 'asefrgthy', ' ', '435678', 'sdff@dfgh', 'unmarried', '0000-00-00', '20180046', 'er5t', 'ertyui', '45678'),
('werty', 'tyu8', ' ', ' ', 435, '0567-03-04', 'Male', 'asdfg', ' ', '345678', 'r@gfh', 'unmarried', '0000-00-00', '20180047', 'dfg', 'dsrfg', '3456'),
('ftgy', 'rtyu', ' ', ' ', 45, '0067-05-04', 'Male', 'rtt', ' ', '234567', 'rtg@sdgf', 'Married', '0000-00-00', '20180048', 'ert', 'wert', '4567'),
('ert56', 'erty', ' ', ' ', 3, '0006-05-31', 'Male', 'wert', ' ', '3456', 'rtf@eerty', 'Married', '0000-00-00', '20180049', 'wert', 'ert', '3456'),
('janani', 'A', '', '', 23, '1995-01-18', 'Femal', '47,North Street', '', '9487347678', 'janani.apasa@gmail.c', 'unmarried', '0000-00-00', '20180050', 'Valliyoor', 'India', '627113'),
('ffejroi', 'kjkll;', ' ', ' ', 76, '0089-07-06', 'Female', 'gfhjk', ' ', '4567', 'hgj2fg@fgh', 'unmarried', '0000-00-00', '20180051', 'fghj', 'ghj', '5678'),
('ffejroi', 'kjkll;', ' ', ' ', 76, '0089-07-06', 'Female', 'gfhjk', ' ', '4567', 'hgj2fg@fgh', 'unmarried', '0000-00-00', '20180052', 'fghj', 'ghj', '5678'),
('4567t8yu', 'trytuyi', ' ', ' ', 7, '0789-05-06', 'Male', 'efgthyju', ' ', '54678', 'rtyui@fgthj', 'unmarried', '0000-00-00', '20180053', 'ertyui', 'fgtyuio', '45678'),
('4567t8yu', 'trytuyi', ' ', ' ', 7, '0789-05-06', 'Male', 'efgthyju', ' ', '54678', 'rtyui@fgthj', 'unmarried', '0000-00-00', '20180054', 'ertyui', 'fgtyuio', '45678'),
('4567t8yu', 'trytuyi', ' ', ' ', 7, '0789-05-06', 'Male', 'efgthyju', ' ', '54678', 'rtyui@fgthj', 'unmarried', '0000-00-00', '20180055', 'ertyui', 'fgtyuio', '45678'),
('4567t8yu', 'trytuyi', ' ', ' ', 7, '0789-05-06', 'Male', 'efgthyju', ' ', '54678', 'rtyui@fgthj', 'unmarried', '0000-00-00', '20180056', 'ertyui', 'fgtyuio', '45678'),
('4567t8yu', 'trytuyi', ' ', ' ', 7, '0789-05-06', 'Male', 'efgthyju', ' ', '54678', 'rtyui@fgthj', 'unmarried', '0000-00-00', '20180057', 'ertyui', 'fgtyuio', '45678'),
('4567t8yu', 'trytuyi', ' ', ' ', 7, '0789-05-06', 'Male', 'efgthyju', ' ', '54678', 'rtyui@fgthj', 'unmarried', '0000-00-00', '20180058', 'ertyui', 'fgtyuio', '45678'),
('wdhkjl;', 'gjhklk;l', ' ', ' ', 35, '0046-09-08', 'Female', 'rhtr', ' ', '437457', 'dxbg@ghtj', 'unmarried', '0000-00-00', '20180059', 'rjtgr', 'trjj', '4645754'),
('wdhkjl;', 'gjhklk;l', ' ', ' ', 35, '0046-09-08', 'Female', 'rhtr', ' ', '437457', 'dxbg@ghtj', 'unmarried', '0000-00-00', '20180060', 'rjtgr', 'trjj', '4645754'),
('wdhkjl;', 'gjhklk;l', ' ', ' ', 35, '0046-09-08', 'Female', 'rhtr', ' ', '437457', 'dxbg@ghtj', 'unmarried', '0000-00-00', '20180061', 'rjtgr', 'trjj', '4645754'),
('gdfr', 'sdgdfg', ' ', ' ', 534, '0006-04-05', 'Male', 'eyer', ' ', '46457', 'dg@dhgdrj', 'Married', '0000-00-00', '20180062', 'rdjhf', 'ftjfj', '54657'),
('Jegan Employee', 'TestEmployee', ' ', ' ', 56, '2018-04-01', 'Male', 'gjgyfjh', ' ', NULL, NULL, 'Married', '0000-00-00', '20180063', NULL, NULL, NULL),
('Jegan Employee', 'TestEmployee', ' ', ' ', 56, '2018-04-01', 'Male', 'gjgyfjh', ' ', NULL, NULL, 'Married', '0000-00-00', '20180064', NULL, NULL, NULL),
('Jegan', 'Nath', ' ', ' ', 3, NULL, NULL, NULL, ' ', NULL, NULL, NULL, '0000-00-00', '20180065', NULL, NULL, NULL),
('Jegan', 'Nath', ' ', ' ', 3, NULL, NULL, NULL, ' ', NULL, NULL, NULL, '0000-00-00', '20180066', NULL, NULL, NULL),
('Jegan', 'Nath', ' ', ' ', 3, NULL, NULL, NULL, ' ', NULL, NULL, NULL, '0000-00-00', '20180067', NULL, NULL, NULL),
('jegan', 'jegan', ' ', ' ', 45, NULL, NULL, NULL, ' ', NULL, NULL, NULL, '0000-00-00', '20180068', NULL, NULL, NULL),
('jegan', 'jegan', ' ', ' ', 45, NULL, NULL, NULL, ' ', NULL, NULL, NULL, '0000-00-00', '20180069', NULL, NULL, NULL),
('jegan', 'jegan', ' ', ' ', 45, NULL, NULL, NULL, ' ', NULL, NULL, NULL, '0000-00-00', '20180070', NULL, NULL, NULL),
('jegan', 'jegan', ' ', ' ', 45, NULL, NULL, NULL, ' ', NULL, NULL, NULL, '0000-00-00', '20180071', NULL, NULL, NULL),
('jegan', 'jegan', ' ', ' ', 45, NULL, NULL, NULL, ' ', NULL, NULL, NULL, '0000-00-00', '20180072', NULL, NULL, NULL),
('jegan', 'jegan', ' ', ' ', 45, NULL, NULL, NULL, ' ', NULL, NULL, NULL, '0000-00-00', '20180073', NULL, NULL, NULL),
('jegan', 'jegan', ' ', ' ', 45, NULL, NULL, NULL, ' ', NULL, NULL, NULL, '0000-00-00', '20180074', NULL, NULL, NULL),
('jegan', 'jegan', ' ', ' ', 45, NULL, NULL, NULL, ' ', NULL, NULL, NULL, '0000-00-00', '20180075', NULL, NULL, NULL),
('thu', 'thu', ' ', ' ', NULL, NULL, NULL, NULL, ' ', NULL, NULL, NULL, '0000-00-00', '20180076', NULL, NULL, NULL),
('jeg', 'jeg', ' ', ' ', NULL, NULL, NULL, NULL, ' ', NULL, NULL, NULL, '0000-00-00', '20180077', NULL, NULL, NULL),
('jeg', 'jeg', ' ', ' ', NULL, NULL, NULL, NULL, ' ', NULL, NULL, NULL, '0000-00-00', '20180078', NULL, NULL, NULL),
('jeg', 'jeg', ' ', ' ', NULL, NULL, NULL, NULL, ' ', NULL, NULL, NULL, '0000-00-00', '20180079', NULL, NULL, NULL),
('jeg', 'jeg', ' ', ' ', NULL, NULL, NULL, NULL, ' ', NULL, NULL, NULL, '0000-00-00', '20180080', NULL, NULL, NULL),
('jeg', 'jeg', ' ', ' ', NULL, NULL, NULL, NULL, ' ', NULL, NULL, NULL, '0000-00-00', '20180081', NULL, NULL, NULL),
('jeg', 'jeg', ' ', ' ', NULL, NULL, NULL, NULL, ' ', NULL, NULL, NULL, '0000-00-00', '20180082', NULL, NULL, NULL),
('jeg', 'jeg', '', '', NULL, '0000-00-00', NULL, NULL, '', NULL, NULL, NULL, '0000-00-00', '20180083', 'kjj', 'fhgju', NULL),
('Jegan nathan Test', 'Test Last Name', ' ', ' ', 34, NULL, NULL, NULL, ' ', NULL, NULL, NULL, '0000-00-00', '20180084', NULL, NULL, NULL),
('Jegan nathan Test', 'Test Last Name', ' ', ' ', 34, NULL, NULL, NULL, ' ', NULL, NULL, NULL, '0000-00-00', '20180085', NULL, NULL, NULL),
('Jegan nathan Test', 'Test Last Name', ' ', ' ', 34, NULL, NULL, NULL, ' ', NULL, NULL, NULL, '0000-00-00', '20180086', NULL, NULL, NULL),
('First Name', 'Last Name', ' ', ' ', NULL, NULL, NULL, NULL, ' ', NULL, NULL, NULL, '0000-00-00', '20180087', NULL, NULL, NULL),
('ju', 'ju', ' ', ' ', NULL, NULL, NULL, NULL, ' ', NULL, NULL, NULL, '0000-00-00', '20180088', NULL, NULL, NULL),
('jega', 'jega', ' ', ' ', NULL, NULL, NULL, NULL, ' ', NULL, NULL, NULL, '0000-00-00', '20180089', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`transactionId`);

--
-- Indexes for table `education_details`
--
ALTER TABLE `education_details`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `family_details`
--
ALTER TABLE `family_details`
  ADD PRIMARY KEY (`indexVal`,`user_id`);

--
-- Indexes for table `media_details`
--
ALTER TABLE `media_details`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `occupation_details`
--
ALTER TABLE `occupation_details`
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `personal_details`
--
ALTER TABLE `personal_details`
  ADD PRIMARY KEY (`user_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
