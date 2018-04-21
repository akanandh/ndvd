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
  `edate` date DEFAULT NULL,
  `comments` varchar(1000) DEFAULT NULL,
  `host_name` varchar(500) DEFAULT NULL,
  `ip_address` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `activity`
--

INSERT INTO `activity` (`activity_id`, `activity_name`, `sdate`, `edate`, `comments`, `host_name`, `ip_address`) VALUES
('Test Event Type', 'Test Event Name', '2018-04-01', '2018-04-19', 'Test Desc', 'test host', '::ffff:127.0.0.1'),
('Test Event Type', 'Test Event Name', '2018-04-01', '2018-04-08', 'Test', 'Test', '::ffff:127.0.0.1'),
('Test Event Type', 'Test', '2018-04-01', '2018-04-07', 'Test', 'Test', '::ffff:127.0.0.1'),
('Test Event Type', 'test', '2018-04-01', '2018-04-01', NULL, 'test', '::ffff:127.0.0.1'),
('Test Event Type', 'test', '2018-04-01', '2018-04-01', 'h', 'test', '::ffff:127.0.0.1'),
('Test Event Type', 'Teee', '2018-04-01', '2018-04-07', 'TestvTest', 'tesss', '::ffff:127.0.0.1'),
('Link', 'Link Name', '2018-04-01', '2018-04-05', 'Test', 'Link', '::ffff:127.0.0.1'),
('Link', 'Link', '2018-04-01', '2018-04-01', 'JEGAN', 'Link', '::ffff:127.0.0.1'),
('Test Event', 'Event', '2018-04-01', '2018-04-06', 'Test', 'Test', '::ffff:127.0.0.1'),
('Test Event', 'Event', '2018-04-01', '2018-04-06', 'Test', 'Test', '::ffff:127.0.0.1'),
('Test Event', 'j', '2018-04-01', NULL, NULL, 'j', '::ffff:127.0.0.1'),
('Link', 'cc', '2018-04-01', '2018-03-31', 'cc', 'cc', '::ffff:127.0.0.1'),
('Link', 'Linkq', '2018-04-01', '2018-04-18', 'scs', 'dsff', '::ffff:127.0.0.1');

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
('Test Event Name', '.\\\\gallery\\Test Event Type\\file-1522563358895.jpg', NULL, 'jpg', 'file-1520101785884.jpg', '2018-04-01'),
('Test Event Name', '.\\\\gallery\\Test Event Type\\file-1522563408612.jpg', NULL, 'jpg', 'file-1520101785884.jpg', '2018-04-01'),
('Test', '.\\\\gallery\\Test Event Type\\file-1522563448763.jpg', NULL, 'jpg', 'file-1520101785884.jpg', '2018-04-01'),
('test', 'https://youtu.be/3yzvwwl3oyI', NULL, 'live', 'live', '2018-04-01'),
('test', 'https://www.youtube.com/embed/3yzvwwl3oyI', NULL, 'live', 'live', '2018-04-01'),
('Teee', '.\\\\gallery\\Test Event Type\\file-1522574542922.jpg', NULL, 'jpg', 'file-1520101785884.jpg', '2018-04-01'),
('Link Name', 'https://www.youtube.com/embed/P6adJCbTkss', NULL, 'live', 'live', '2018-04-01'),
('Link', 'https://youtu.be/3UNwDIfzNh8', NULL, 'live', 'live', '2018-04-01'),
('Event', '.\\\\gallery\\Test Event\\file-1522579189098.jpg', NULL, 'jpg', 'file-1520101785884.jpg', '2018-04-01'),
('j', '.\\\\gallery\\Test Event\\file-1522579632735.jpg', NULL, 'jpg', 'file-1520101785884.jpg', '2018-04-01'),
('Linkq', '.\\\\gallery\\Link\\file-1522593939642.jpg', NULL, 'jpg', 'file-1520101785884.jpg', '2018-04-01');

--
-- Triggers `content`
--
DELIMITER $$
CREATE TRIGGER `media_count` AFTER INSERT ON `content` FOR EACH ROW INSERT INTO media_count (media_count.activity_id, counter)
SELECT content.activity_id,COUNT(*)
FROM content GROUP BY activity_id
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `media_count`
--

CREATE TABLE `media_count` (
  `activity_id` varchar(500) NOT NULL,
  `counter` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `media_count`
--

INSERT INTO `media_count` (`activity_id`, `counter`) VALUES
('Test Event Name', 1),
('Test Event Name', 2),
('Test', 1),
('Test Event Name', 2),
('Test', 2),
('Test Event Name', 2),
('Test', 3),
('Test Event Name', 2),
('Teee', 1),
('Test', 3),
('Test Event Name', 2),
('Link Name', 1),
('Teee', 1),
('Test', 3),
('Test Event Name', 2),
('Link', 1),
('Link Name', 1),
('Teee', 1),
('Test', 3),
('Test Event Name', 2),
('Event', 1),
('Link', 1),
('Link Name', 1),
('Teee', 1),
('Test', 3),
('Test Event Name', 2),
('Event', 1),
('j', 1),
('Link', 1),
('Link Name', 1),
('Teee', 1),
('Test', 3),
('Test Event Name', 2),
('Event', 1),
('j', 1),
('Link', 1),
('Link Name', 1),
('Linkq', 1),
('Teee', 1),
('Test', 3),
('Test Event Name', 2);

-- --------------------------------------------------------

--
-- Table structure for table `subscribtion`
--

CREATE TABLE `subscribtion` (
  `user_id` varchar(250) DEFAULT NULL,
  `activity_id` varchar(250) DEFAULT NULL,
  `counter` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
