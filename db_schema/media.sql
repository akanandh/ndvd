-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 03, 2018 at 07:21 PM
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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
