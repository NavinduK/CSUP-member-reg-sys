-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2020 at 06:13 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `admin`
--

-- --------------------------------------------------------

--
-- Table structure for table `Admin`
--

CREATE TABLE `admin` (
  `Reg_ID` int(10) NOT NULL,
  `First_Name` varchar(30) NOT NULL,
  `Last_Name` varchar(30) NOT NULL,
  `Contact_No` int(10) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Post` varchar(50) NOT NULL,
  `Password` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Admin`
--

INSERT INTO `Admin` (`Reg_ID`, `First_Name`, `Last_Name`, `Contact_No`, `Email`, `Post`, `Password`) VALUES
(1, 'Nimal', 'Disanayake', 774561234, 'nimal@gmail.com', 'President', 'admin'),
(2, 'Saman', 'Kumara', 712348762, 'samanK@gmail.com', 'Vice President', 'admin'),
(3, '', '', 0, '', '', ''),
(4, 'Kamal', 'Gunarathne', 764731284, 'kamalgunarathne@gmail.com', 'Secretary', 'admin'),
(5, 'Nimal ', 'Piyasiri', 776319400, 'nimal123@gmail.com', 'Editor', 'admin'),
(6, 'Aruna', 'Kaluarachchi', 718934044, 'aruna.kalu@gmail.com', 'Web master', 'admin'),
(7, '', '', 0, '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Admin`
--
ALTER TABLE `Admin`
  ADD PRIMARY KEY (`Reg_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Admin`
--
ALTER TABLE `Admin`
  MODIFY `Reg_ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
