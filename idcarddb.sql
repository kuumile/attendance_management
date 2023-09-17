-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 16, 2023 at 08:02 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `idcarddb`
--

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `cid` int(11) NOT NULL,
  `company_name` varchar(250) DEFAULT NULL,
  `company_email` varchar(250) DEFAULT NULL,
  `company_logo` varchar(250) DEFAULT NULL,
  `dor` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`cid`, `company_name`, `company_email`, `company_logo`, `dor`) VALUES
(8, 'NURSES TRAINING COLLEGE-DAMONGO', 'aloysius.n.kuumile@gmail.com', 'logo/dntc logo.png', '2023-04-17 10:08:55');

-- --------------------------------------------------------

--
-- Table structure for table `klass`
--

CREATE TABLE `klass` (
  `kid` int(11) NOT NULL,
  `pid` int(11) DEFAULT NULL,
  `klass_name` varchar(250) DEFAULT NULL,
  `dor` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `klass`
--

INSERT INTO `klass` (`kid`, `pid`, `klass_name`, `dor`) VALUES
(3, 8, 'D7', '2023-04-11 13:18:15'),
(4, 8, 'D8', '2023-04-11 13:34:31'),
(5, 8, 'D9', '2023-04-11 14:18:46'),
(6, 10, 'RNAC16', '2023-04-11 14:19:03'),
(8, 10, 'RNAC17', '2023-04-11 14:29:58');

-- --------------------------------------------------------

--
-- Table structure for table `program`
--

CREATE TABLE `program` (
  `pid` int(11) NOT NULL,
  `program_name` varchar(250) DEFAULT NULL,
  `dor` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `program`
--

INSERT INTO `program` (`pid`, `program_name`, `dor`) VALUES
(8, 'Registered General Nurse', '2023-04-10 15:28:54'),
(10, 'Registered Nurses Assistant Clinical', '2023-04-11 11:56:00');

-- --------------------------------------------------------

--
-- Table structure for table `student_account`
--

CREATE TABLE `student_account` (
  `stid` int(11) NOT NULL,
  `fullname` varchar(250) DEFAULT NULL,
  `program` varchar(350) DEFAULT NULL,
  `klass` varchar(50) DEFAULT NULL,
  `idnumber` varchar(50) DEFAULT NULL,
  `contact` varchar(50) DEFAULT NULL,
  `picture` varchar(350) DEFAULT NULL,
  `status` varchar(25) DEFAULT NULL,
  `dor` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student_account`
--

INSERT INTO `student_account` (`stid`, `fullname`, `program`, `klass`, `idnumber`, `contact`, `picture`, `status`, `dor`) VALUES
(2, 'Hassan Mohammed Iddrisu', '8', '4', '0023632484628', '+233242676192', 'pictures/IMG_1658.JPG', 'Active', '2023-04-18 14:35:30'),
(31, 'Yenbo Mabel', '8', '4', '1010070056', '0201399068', 'pictures/IMG_1671.JPG', 'Active', '2023-04-16 18:10:15'),
(32, 'Aloysius Naabevuumi Kuumile', '8', '4', '545421245400', '+233242676192', 'pictures/IMG_1654.JPG', 'Active', '2023-04-16 23:17:56'),
(33, 'Aloysius Naabevuumi Kuumile', '8', '4', '5454212454', '+233242676192', 'pictures/IMG_1661.JPG', 'Active', '2023-04-16 23:18:15'),
(34, 'Aloysius Naabevuumi Kuumile', '8', '4', '545421245', '+233242676192', 'pictures/IMG_1674.JPG', 'Active', '2023-04-16 23:18:27'),
(35, 'JAFARU  FAIKA', '8', '5', 'NTCDGRGN220001', '0208247911', 'pictures/NTCDGRGN220001.JPG', 'Active', '2023-06-20 22:23:20'),
(36, 'HADIJA  ABDUL KARIM', '8', '5', 'NTCDGRGN220002', NULL, 'pictures/NTCDGRGN220002.JPG', 'Active', '2023-06-20 22:23:17'),
(37, 'KHADIJA  MOHAMMED', '8', '5', 'NTCDGRGN220003', NULL, 'pictures/NTCDGRGN220003.JPG', 'Active', '2023-06-20 22:23:13'),
(38, 'MOHAMMED   ABDULAI ', '8', '5', 'NTCDGRGN220004', NULL, 'pictures/NTCDGRGN220004.JPG', 'Active', '2023-06-20 22:23:10'),
(39, 'AMINA  KIPO', '8', '5', 'NTCDGRGN220005', NULL, 'pictures/NTCDGRGN220005.JPG', 'Active', '2023-04-18 14:17:13'),
(40, 'SALAMATU  BAYON', '8', '5', 'NTCDGRGN220006', NULL, 'pictures/NTCDGRGN220006.JPG', 'Active', '2023-04-18 14:17:13'),
(41, 'NASURULAI  ALHASSAN', '8', '5', 'NTCDGRGN220007', NULL, 'pictures/NTCDGRGN220007.JPG', 'Active', '2023-05-24 00:46:12'),
(42, 'TAIBATU  TAHIRU', '8', '5', 'NTCDGRGN220008', NULL, 'pictures/NTCDGRGN220008.JPG', 'Active', '2023-04-18 14:17:13'),
(43, 'ISAAC   ADAMI ', '8', '5', 'NTCDGRGN220009', NULL, 'pictures/NTCDGRGN220009.JPG', 'Active', '2023-04-18 14:17:13'),
(44, 'IBRAHIM  OSMAN', '8', '5', 'NTCDGRGN220010', NULL, 'pictures/NTCDGRGN220010.JPG', 'Active', '2023-04-18 14:17:13'),
(45, 'SHARIFATU  ALHASSAN', '8', '5', 'NTCDGRGN220011', NULL, 'pictures/NTCDGRGN220011.JPG', 'Active', '2023-05-17 17:44:29'),
(46, 'BARIATU  SULEMANA', '8', '5', 'NTCDGRGN220012', NULL, 'pictures/NTCDGRGN220012.JPG', 'Active', '2023-05-17 17:44:37'),
(47, 'LUKMAN  KPEMAH', '8', '5', 'NTCDGRGN220013', NULL, 'pictures/NTCDGRGN220013.JPG', 'Active', '2023-04-18 14:21:03'),
(48, 'BAINATU  ISSAHAKU', '8', '5', 'NTCDGRGN220014', NULL, 'pictures/NTCDGRGN220014.JPG', 'Active', '2023-04-18 14:21:03'),
(49, 'ISSAH  SUWEIBA', '8', '5', 'NTCDGRGN220015', NULL, 'pictures/NTCDGRGN220015.JPG', 'Active', '2023-04-18 14:21:03'),
(50, 'ANASS  RABIU', '8', '5', 'NTCDGRGN220016', NULL, 'pictures/NTCDGRGN220016.JPG', 'Active', '2023-04-18 14:21:03'),
(51, 'YAKUBU  JEBUNI', '8', '5', 'NTCDGRGN220017', NULL, 'pictures/NTCDGRGN220017.JPG', 'Active', '2023-04-18 14:21:03'),
(52, 'ABDUL MATIN  MOHAMMED', '8', '5', 'NTCDGRGN220018', NULL, 'pictures/NTCDGRGN220018.JPG', 'Active', '2023-04-18 14:21:03'),
(53, 'NASHIRUDEEN  HAFIZ', '8', '5', 'NTCDGRGN220019', NULL, 'pictures/NTCDGRGN220019.JPG', 'Active', '2023-04-18 14:21:03'),
(54, 'MASHUD  ABDULAI', '8', '5', 'NTCDGRGN220020', NULL, 'pictures/NTCDGRGN220020.JPG', 'Active', '2023-04-18 14:21:03'),
(55, 'ZUBERU TIKA BAFORKA', '8', '5', 'NTCDGRGN220021', NULL, 'pictures/NTCDGRGN220021.JPG', 'Active', '2023-04-18 14:21:03'),
(56, 'MARY  AKUTAH', '8', '5', 'NTCDGRGN220022', NULL, 'pictures/NTCDGRGN220022.JPG', 'Active', '2023-04-18 14:21:03'),
(57, 'SANDRA  AMANKWAH', '8', '5', 'NTCDGRGN220023', NULL, 'pictures/NTCDGRGN220023.JPG', 'Active', '2023-04-18 14:21:03'),
(58, 'RUBAMMA  IDDRISU', '8', '5', 'NTCDGRGN220024', NULL, 'pictures/NTCDGRGN220024.JPG', 'Active', '2023-04-18 14:21:03'),
(60, 'DORA  BREFO', '8', '5', 'NTCDGRGN220026', NULL, 'pictures/NTCDGRGN220026.JPG', 'Active', '2023-04-18 14:21:03'),
(61, 'EDMOND ` MENSAH', '8', '5', 'NTCDGRGN220027', NULL, 'pictures/NTCDGRGN220027.JPG', 'Active', '2023-04-18 14:21:03'),
(62, 'SISU  YAHUZA', '8', '5', 'NTCDGRGN220028', NULL, 'pictures/NTCDGRGN220028.JPG', 'Active', '2023-04-18 14:21:03'),
(63, 'WALHANATU DARICHE  JAKPA', '8', '5', 'NTCDGRGN220029', NULL, 'pictures/NTCDGRGN220029.JPG', 'Active', '2023-04-18 14:21:03'),
(64, 'RUHIYA  HALIDU', '8', '5', 'NTCDGRGN220030', NULL, 'pictures/NTCDGRGN220030.JPG', 'Active', '2023-04-18 14:21:03'),
(65, 'MOHAMMED  SHARIF', '8', '5', 'NTCDGRGN220031', NULL, 'pictures/NTCDGRGN220031.JPG', 'Active', '2023-04-18 14:21:03'),
(66, 'KUBURA  YAKUBU', '8', '5', 'NTCDGRGN220032', NULL, 'pictures/NTCDGRGN220032.JPG', 'Active', '2023-04-18 14:21:03'),
(67, 'KISMATU  IDDRISU', '8', '5', 'NTCDGRGN220034', NULL, 'pictures/NTCDGRGN220034.JPG', 'Active', '2023-04-18 14:21:03'),
(68, 'JOHN EUDES  BAPUOH', '8', '5', 'NTCDGRGN220035', NULL, 'pictures/NTCDGRGN220035.JPG', 'Active', '2023-04-18 14:21:03'),
(69, 'UBAIDATU KANYITI  MASURU', '8', '5', 'NTCDGRGN220036', NULL, 'pictures/NTCDGRGN220036.JPG', 'Active', '2023-04-18 14:21:03'),
(70, 'AKUNFA  TANKO', '8', '5', 'NTCDGRGN220037', NULL, 'pictures/NTCDGRGN220037.JPG', 'Active', '2023-04-18 14:21:03'),
(71, 'FUSEINA   ZAKARIA ', '8', '5', 'NTCDGRGN220038', NULL, 'pictures/NTCDGRGN220038.JPG', 'Active', '2023-04-18 14:21:03'),
(72, 'RUTH  GUMAH', '8', '5', 'NTCDGRGN220039', NULL, 'pictures/NTCDGRGN220039.JPG', 'Active', '2023-04-18 14:21:03'),
(73, 'MANSURA DAWUDA NNABA', '8', '5', 'NTCDGRGN220040', NULL, 'pictures/NTCDGRGN220040.JPG', 'Active', '2023-04-18 14:21:03'),
(74, 'HUMU  FUSEINI', '8', '5', 'NTCDGRGN220041', NULL, 'pictures/NTCDGRGN220041.JPG', 'Active', '2023-04-18 14:21:03'),
(75, 'AYISHETU  AKPARIBO', '8', '5', 'NTCDGRGN220042', NULL, 'pictures/NTCDGRGN220042.JPG', 'Active', '2023-04-18 14:21:03'),
(76, 'SUMAILA  IBRAHIM', '8', '5', 'NTCDGRGN220043', NULL, 'pictures/NTCDGRGN220043.JPG', 'Active', '2023-04-18 14:21:03'),
(77, 'GIFTY  BALAGANAKWI', '8', '5', 'NTCDGRGN220044', NULL, 'pictures/NTCDGRGN220044.JPG', 'Active', '2023-04-18 14:21:03'),
(78, 'SULE AVOKA ALHASSAN', '8', '5', 'NTCDGRGN220045', NULL, 'pictures/NTCDGRGN220045.JPG', 'Active', '2023-04-18 14:21:03'),
(79, 'A. HAFIZ   ABUKARI', '8', '5', 'NTCDGRGN220046', NULL, 'pictures/NTCDGRGN220046.JPG', 'Active', '2023-04-18 14:21:03'),
(80, 'AWINI LATIFA AWINTIMA', '8', '5', 'NTCDGRGN220047', NULL, 'pictures/NTCDGRGN220047.JPG', 'Active', '2023-04-18 14:21:03'),
(81, 'KHADIJA   MUTARI', '8', '5', 'NTCDGRGN220048', NULL, 'pictures/NTCDGRGN220048.JPG', 'Active', '2023-04-18 14:21:03'),
(82, 'HAMDAN  ISSAH', '8', '5', 'NTCDGRGN220049', NULL, 'pictures/NTCDGRGN220049.JPG', 'Active', '2023-04-18 14:21:03'),
(83, 'AYISHA  SALIFU', '8', '5', 'NTCDGRGN220050', NULL, 'pictures/NTCDGRGN220050.JPG', 'Active', '2023-04-18 14:21:03'),
(84, 'JALIU  LATIF', '8', '5', 'NTCDGRGN220051', NULL, 'pictures/NTCDGRGN220051.JPG', 'Active', '2023-04-18 14:21:03'),
(85, 'AGYEN BREFO GODWIN', '8', '5', 'NTCDGRGN220052', NULL, 'pictures/NTCDGRGN220052.JPG', 'Active', '2023-04-18 14:21:03'),
(86, 'IBRAHIM   LUCKUMANI', '8', '5', 'NTCDGRGN220053', NULL, 'pictures/NTCDGRGN220053.JPG', 'Active', '2023-04-18 14:21:03'),
(87, 'MUBARIK  BAVUG', '8', '5', 'NTCDGRGN220054', NULL, 'pictures/NTCDGRGN220054.JPG', 'Active', '2023-04-18 14:21:03'),
(88, 'ARAIMAH  MUMUNI', '8', '5', 'NTCDGRGN220055', NULL, 'pictures/NTCDGRGN220055.JPG', 'Active', '2023-04-18 14:21:03'),
(89, 'AKPARIBO YAKUBU WASILA', '8', '5', 'NTCDGRGN220056', NULL, 'pictures/NTCDGRGN220056.JPG', 'Active', '2023-04-18 14:21:03'),
(90, 'ABDUL RAZACK  YAKUBU', '8', '5', 'NTCDGRGN220057', NULL, 'pictures/NTCDGRGN220057.JPG', 'Active', '2023-04-18 14:21:03'),
(91, 'ABDUL-BASIT  ABDULAI', '8', '5', 'NTCDGRGN220058', NULL, 'pictures/NTCDGRGN220058.JPG', 'Active', '2023-04-18 14:21:03'),
(92, 'BETTY ADOBEA  LARTEY', '8', '5', 'NTCDGRGN220059', NULL, 'pictures/NTCDGRGN220059.JPG', 'Active', '2023-04-18 14:21:03'),
(93, 'CORNELIUS   SOGBERI', '8', '5', 'NTCDGRGN220060', NULL, 'pictures/NTCDGRGN220060.JPG', 'Active', '2023-04-18 14:21:03'),
(94, 'OSMAN RASHIDA MANDEEYA', '8', '5', 'NTCDGRGN220061', NULL, 'pictures/NTCDGRGN220061.JPG', 'Active', '2023-04-18 14:21:03'),
(95, 'MAHAMA  AYATULAHI', '8', '5', 'NTCDGRGN220062', NULL, 'pictures/NTCDGRGN220062.JPG', 'Active', '2023-04-18 14:21:03'),
(96, 'DAUDA ABDUL HANAN', '8', '5', 'NTCDGRGN220063', NULL, 'pictures/NTCDGRGN220063.JPG', 'Active', '2023-04-18 14:21:03'),
(97, 'JOSEPH NANA YEBOAH', '8', '5', 'NTCDGRGN220064', NULL, 'pictures/NTCDGRGN220064.JPG', 'Active', '2023-04-18 14:21:03'),
(98, 'YUSSIF  KHADIJA', '8', '5', 'NTCDGRGN220065', NULL, 'pictures/NTCDGRGN220065.JPG', 'Active', '2023-04-18 14:21:03'),
(99, 'AZAMATSI  EBENEZER', '8', '5', 'NTCDGRGN220066', NULL, 'pictures/NTCDGRGN220066.JPG', 'Active', '2023-04-18 14:21:03'),
(100, ' CYNTHIA YENESOGMA   ABONA ', '8', '5', 'NTCDGRGN220067', NULL, 'pictures/NTCDGRGN220067.JPG', 'Active', '2023-04-18 14:21:03'),
(101, 'GIDEON ABEBE YERINAA', '8', '5', 'NTCDGRGN220068', NULL, 'pictures/NTCDGRGN220068.JPG', 'Active', '2023-04-18 14:21:03'),
(102, 'MUMUNI  HARUNA', '8', '5', 'NTCDGRGN220069', NULL, 'pictures/NTCDGRGN220069.JPG', 'Active', '2023-04-18 14:21:03'),
(103, 'NKPEGMABU CHRISTOPHER  NYOBON', '8', '5', 'NTCDGRGN220070', NULL, 'pictures/NTCDGRGN220070.JPG', 'Active', '2023-04-18 14:21:03'),
(104, 'ABUBAKARI KAMARA ABDUL-RAHMAN', '8', '5', 'NTCDGRGN220071', NULL, 'pictures/NTCDGRGN220071.JPG', 'Active', '2023-04-18 14:21:03'),
(105, 'ASIEDU HAGAR DONKOR', '8', '5', 'NTCDGRGN220072', NULL, 'pictures/NTCDGRGN220072.JPG', 'Active', '2023-04-18 14:21:03'),
(107, 'ZEINAB MANTANSO  DRAMANI', '8', '5', 'NTCDGRGN220074', NULL, 'pictures/NTCDGRGN220074.JPG', 'Active', '2023-04-18 14:21:03'),
(108, 'ABDUL MALIK  TAMINU', '8', '5', 'NTCDGRGN220075', NULL, 'pictures/NTCDGRGN220075.JPG', 'Active', '2023-04-18 14:21:03'),
(109, 'FASIYA MOHAMMED  AWAL', '8', '5', 'NTCDGRGN220076', NULL, 'pictures/NTCDGRGN220076.JPG', 'Active', '2023-04-18 14:21:03'),
(110, 'KHADIJA WARI ALHASSAN', '8', '5', 'NTCDGRGN220077', NULL, 'pictures/NTCDGRGN220077.JPG', 'Active', '2023-04-18 14:21:03'),
(111, 'DANIEL  OWUSU', '8', '5', 'NTCDGRGN220078', NULL, 'pictures/NTCDGRGN220078.JPG', 'Active', '2023-04-18 14:21:03'),
(112, 'ABDUL WADUDU  SEBRE MUSAH', '8', '5', 'NTCDGRGN220079', NULL, 'pictures/NTCDGRGN220079.JPG', 'Active', '2023-04-18 14:21:03'),
(113, 'MAHAMADU  SAMIRA', '8', '5', 'NTCDGRGN220080', NULL, 'pictures/NTCDGRGN220080.JPG', 'Active', '2023-04-18 14:21:03'),
(114, 'ABUBAKARI KUDUS GAZARU', '8', '5', 'NTCDGRGN220081', NULL, 'pictures/NTCDGRGN220081.JPG', 'Active', '2023-04-18 14:21:03'),
(115, 'ZIEM  FORGTAH BUKARI', '8', '5', 'NTCDGRGN220082', NULL, 'pictures/NTCDGRGN220082.JPG', 'Active', '2023-04-18 14:21:03'),
(116, 'RASHIDA  ADAM', '8', '5', 'NTCDGRGN220083', NULL, 'pictures/NTCDGRGN220083.JPG', 'Active', '2023-04-18 14:21:03'),
(117, 'ZULFAWU  WUMBEI', '8', '5', 'NTCDGRGN220084', NULL, 'pictures/NTCDGRGN220084.JPG', 'Active', '2023-04-18 14:21:03'),
(118, 'RUHIA BIANTU FATAWU', '8', '5', 'NTCDGRGN220085', NULL, 'pictures/NTCDGRGN220085.JPG', 'Active', '2023-04-18 14:21:03'),
(119, 'LATIFA  ZAKARI ', '8', '5', 'NTCDGRGN220086', NULL, 'pictures/NTCDGRGN220086.JPG', 'Active', '2023-04-18 14:21:03'),
(120, 'IBRAHIM  FAIZA', '8', '5', 'NTCDGRGN220087', NULL, 'pictures/NTCDGRGN220087.JPG', 'Active', '2023-04-18 14:21:03'),
(121, 'FATIMA  SUALIHU', '8', '5', 'NTCDGRGN220088', NULL, 'pictures/NTCDGRGN220088.JPG', 'Active', '2023-04-18 14:21:03'),
(122, 'ASMAWU  ILANTEY', '8', '5', 'NTCDGRGN220089', NULL, 'pictures/NTCDGRGN220089.JPG', 'Active', '2023-04-18 14:21:03'),
(123, 'ABDULAI  ISSAHAKU', '8', '5', 'NTCDGRGN220090', NULL, 'pictures/NTCDGRGN220090.JPG', 'Active', '2023-04-18 14:21:03'),
(124, 'AMINA  IDDRISU', '8', '5', 'NTCDGRGN220091', NULL, 'pictures/NTCDGRGN220091.JPG', 'Active', '2023-04-18 14:21:03'),
(125, 'ALI  TANIMU', '8', '5', 'NTCDGRGN220092', NULL, 'pictures/NTCDGRGN220092.JPG', 'Active', '2023-04-18 14:21:03'),
(126, 'ALICE  KUMI', '8', '5', 'NTCDGRGN220093', NULL, 'pictures/NTCDGRGN220093.JPG', 'Active', '2023-04-18 14:21:03'),
(127, 'MUNKAILA  RAHINATU', '8', '5', 'NTCDGRGN220094', NULL, 'pictures/NTCDGRGN220094.JPG', 'Active', '2023-04-18 14:21:03'),
(128, 'ASIA   DARI ', '8', '5', 'NTCDGRGN220095', NULL, 'pictures/NTCDGRGN220095.JPG', 'Active', '2023-04-18 14:21:03'),
(129, 'STEPHEN  BIYAM', '8', '5', 'NTCDGRGN220096', NULL, 'pictures/NTCDGRGN220096.JPG', 'Active', '2023-04-18 14:21:03'),
(130, 'ABDUL-RAHAMAN  KHADIJA', '8', '5', 'NTCDGRGN220097', NULL, 'pictures/NTCDGRGN220097.JPG', 'Active', '2023-04-18 14:21:03'),
(131, 'HAKIMATU  YAKUBU', '8', '5', 'NTCDGRGN220098', NULL, 'pictures/NTCDGRGN220098.JPG', 'Active', '2023-04-18 14:21:03'),
(132, 'HELENA  TENGA', '8', '5', 'NTCDGRGN220099', NULL, 'pictures/NTCDGRGN220099.JPG', 'Active', '2023-04-18 14:21:03'),
(133, 'SEIDU  MEMUNATU', '8', '5', 'NTCDGRGN220100', NULL, 'pictures/NTCDGRGN220100.JPG', 'Active', '2023-04-18 14:21:03'),
(134, 'PETER1  BAJERI GUMALA', '8', '5', 'NTCDGRGN220101', NULL, 'pictures/NTCDGRGN220101.JPG', 'Active', '2023-04-18 14:21:03'),
(135, 'MOHAMMED   FATIMATA', '8', '5', 'NTCDGRGN220102', NULL, 'pictures/NTCDGRGN220102.JPG', 'Active', '2023-04-18 14:21:03'),
(136, 'HUBEIDATU EWUNTOMAH ADAM', '8', '5', 'NTCDGRGN220103', NULL, 'pictures/NTCDGRGN220103.JPG', 'Active', '2023-04-18 14:21:03'),
(137, 'SAMPSON  NAWU', '8', '5', 'NTCDGRGN220104', NULL, 'pictures/NTCDGRGN220104.JPG', 'Active', '2023-04-18 14:21:03'),
(138, 'DAVID SOMPAYE ODUMAH', '8', '5', 'NTCDGRGN220105', NULL, 'pictures/NTCDGRGN220105.JPG', 'Active', '2023-04-18 14:21:03'),
(139, 'ABDUL FATAWU  ALHASSAN', '8', '5', 'NTCDGRGN220106', NULL, 'pictures/NTCDGRGN220106.JPG', 'Active', '2023-04-18 14:21:03'),
(140, 'LAAR DAMTEENIN MERCY', '8', '5', 'NTCDGRGN220107', NULL, 'pictures/NTCDGRGN220107.JPG', 'Active', '2023-04-18 14:21:03'),
(141, 'ALHASSAN  JUMAIN', '8', '5', 'NTCDGRGN220108', NULL, 'pictures/NTCDGRGN220108.JPG', 'Active', '2023-04-18 14:21:03'),
(142, 'EUNICE ADDOKAI MENSAH', '8', '5', 'NTCDGRGN220109', NULL, 'pictures/NTCDGRGN220109.JPG', 'Active', '2023-04-18 14:21:03'),
(143, 'SHERIF  AMATU', '8', '5', 'NTCDGRGN220110', NULL, 'pictures/NTCDGRGN220110.JPG', 'Active', '2023-04-18 14:21:03'),
(144, 'RAYMOND  ATTEY', '8', '5', 'NTCDGRGN220111', NULL, 'pictures/NTCDGRGN220111.JPG', 'Active', '2023-04-18 14:21:03'),
(145, 'ABDUL-NASIR  IDDRISU', '8', '5', 'NTCDGRGN220112', NULL, 'pictures/NTCDGRGN220112.JPG', 'Active', '2023-04-18 14:21:03'),
(146, 'EDWARD  PIIME', '8', '5', 'NTCDGRGN220113', NULL, 'pictures/NTCDGRGN220113.JPG', 'Active', '2023-04-18 14:21:03'),
(147, 'SULEMANA   MARIAM ', '8', '5', 'NTCDGRGN220114', NULL, 'pictures/NTCDGRGN220114.JPG', 'Active', '2023-04-18 14:21:03'),
(148, 'PATIENCE  YELBODONG', '8', '5', 'NTCDGRGN220115', NULL, 'pictures/NTCDGRGN220115.JPG', 'Active', '2023-04-18 14:21:03'),
(149, 'HARDI  ABUKARI', '8', '5', 'NTCDGRGN220116', NULL, 'pictures/NTCDGRGN220116.JPG', 'Active', '2023-04-18 14:21:03'),
(150, 'ALIDU BALILA YAW', '8', '5', 'NTCDGRGN220117', NULL, 'pictures/NTCDGRGN220117.JPG', 'Active', '2023-04-18 14:21:03'),
(151, 'YUSSIF  TALHATU', '8', '5', 'NTCDGRGN220118', NULL, 'pictures/NTCDGRGN220118.JPG', 'Active', '2023-04-18 14:21:03'),
(152, 'JESSICA TOMMY JABUNI', '8', '5', 'NTCDGRGN220119', NULL, 'pictures/NTCDGRGN220119.JPG', 'Active', '2023-04-18 14:21:03'),
(153, 'ZULHANATU  BAKARI', '8', '5', 'NTCDGRGN220120', NULL, 'pictures/NTCDGRGN220120.JPG', 'Active', '2023-04-18 14:21:03'),
(154, 'MOHAMMED MISBAWU  IMORO JOE', '8', '5', 'NTCDGRGN220121', NULL, 'pictures/NTCDGRGN220121.JPG', 'Active', '2023-04-18 14:21:03'),
(155, 'WALHANATU  MOHAMMED ', '8', '5', 'NTCDGRGN220122', NULL, 'pictures/NTCDGRGN220122.JPG', 'Active', '2023-04-18 14:21:03'),
(156, 'VICTORIA KUMBEINI PETER', '8', '5', 'NTCDGRGN220123', NULL, 'pictures/NTCDGRGN220123.JPG', 'Active', '2023-04-18 14:21:03'),
(157, 'ABDUL RAUF   ABDUL HAKIM ', '8', '5', 'NTCDGRGN220124', NULL, 'pictures/NTCDGRGN220124.JPG', 'Active', '2023-04-18 14:21:03'),
(158, 'HAWA  ABDULAI', '8', '5', 'NTCDGRGN220125', NULL, 'pictures/NTCDGRGN220125.JPG', 'Active', '2023-04-18 14:21:03'),
(159, 'AZARA BENI-NYA MOHAMMED', '8', '5', 'NTCDGRGN220126', NULL, 'pictures/NTCDGRGN220126.JPG', 'Active', '2023-04-18 14:21:03'),
(160, 'ABUBAKARI  SHERIFATU', '8', '5', 'NTCDGRGN220127', NULL, 'pictures/NTCDGRGN220127.JPG', 'Active', '2023-04-18 14:21:03'),
(161, 'YENNUMI FOSTER NIIGAM', '8', '5', 'NTCDGRGN220128', NULL, 'pictures/NTCDGRGN220128.JPG', 'Active', '2023-04-18 14:21:03'),
(162, 'BRAIMAH  WALHANATU', '8', '5', 'NTCDGRGN220129', NULL, 'pictures/NTCDGRGN220129.JPG', 'Active', '2023-04-18 14:21:03'),
(163, 'ATCHULO NIMATU  JAKPA', '8', '5', 'NTCDGRGN220130', NULL, 'pictures/NTCDGRGN220130.JPG', 'Active', '2023-04-18 14:21:03'),
(164, 'KARIM NINBAJE ABDUL SAUHIBU', '8', '5', 'NTCDGRGN220131', NULL, 'pictures/NTCDGRGN220131.JPG', 'Active', '2023-04-18 14:21:03'),
(165, 'RAHIMA  MOHAMMED', '8', '5', 'NTCDGRGN220132', NULL, 'pictures/NTCDGRGN220132.JPG', 'Active', '2023-04-18 14:21:03'),
(166, 'ABDUL-RAZAK  YAKUBU', '8', '5', 'NTCDGRGN220133', NULL, 'pictures/NTCDGRGN220133.JPG', 'Active', '2023-04-18 14:21:03'),
(167, 'AKHBAR  ABDUL MAJEED', '8', '5', 'NTCDGRGN220134', NULL, 'pictures/NTCDGRGN220134.JPG', 'Active', '2023-04-18 14:21:04'),
(168, 'NYADIA DARI   MOHAMMED', '8', '5', 'NTCDGRGN220135', NULL, 'pictures/NTCDGRGN220135.JPG', 'Active', '2023-04-18 14:21:04'),
(169, 'MOHAMMED  IBRAHIM', '8', '5', 'NTCDGRGN220136', NULL, 'pictures/NTCDGRGN220136.JPG', 'Active', '2023-04-18 14:21:04'),
(170, 'MARIAM  MAHAMI', '8', '5', 'NTCDGRGN220137', NULL, 'pictures/NTCDGRGN220137.JPG', 'Active', '2023-04-18 14:21:04'),
(171, 'MARIZU  DAWDA', '8', '5', 'NTCDGRGN220138', NULL, 'pictures/NTCDGRGN220138.JPG', 'Active', '2023-04-18 14:21:04'),
(172, 'JUMAANA  MANTANSO ABUBAKAR', '8', '5', 'NTCDGRGN220139', NULL, 'pictures/NTCDGRGN220139.JPG', 'Active', '2023-04-18 14:21:04'),
(173, 'HAWA  ABUKARI', '8', '5', 'NTCDGRGN220140', NULL, 'pictures/NTCDGRGN220140.JPG', 'Active', '2023-04-18 14:21:04'),
(174, 'ABDUL WARIS   BABA', '8', '5', 'NTCDGRGN220141', NULL, 'pictures/NTCDGRGN220141.JPG', 'Active', '2023-04-18 14:21:04'),
(175, 'IBRAHIM  ABDULAI', '8', '5', 'NTCDGRGN220142', NULL, 'pictures/NTCDGRGN220142.JPG', 'Active', '2023-04-18 14:21:04'),
(176, 'ABDULAI SAYELDOW  ABDULAI', '8', '5', 'NTCDGRGN220143', NULL, 'pictures/NTCDGRGN220143.JPG', 'Active', '2023-04-18 14:21:04'),
(177, 'TALENKIGAAK MERCY NIYAMOR', '8', '5', 'NTCDGRGN220144', NULL, 'pictures/NTCDGRGN220144.JPG', 'Active', '2023-04-18 14:21:04'),
(178, 'TETTEH  ELIZABETH', '8', '5', 'NTCDGRGN220145', NULL, 'pictures/NTCDGRGN220145.JPG', 'Active', '2023-04-18 14:21:04'),
(179, 'NTEKUNI DESMOND KWAME', '8', '5', 'NTCDGRGN220146', NULL, 'pictures/NTCDGRGN220146.JPG', 'Active', '2023-04-18 14:21:04'),
(180, 'COLLINS MUMUNI ADAMS DIMBIYURA', '8', '5', 'NTCDGRGN220147', NULL, 'pictures/NTCDGRGN220147.JPG', 'Active', '2023-04-18 14:21:04'),
(181, 'ASANA  MOHAMMED', '8', '5', 'NTCDGRGN220148', NULL, 'pictures/NTCDGRGN220148.JPG', 'Active', '2023-04-18 14:21:04'),
(182, 'MOHAMMED RASHAD  MUSAH', '8', '5', 'NTCDGRGN220149', NULL, 'pictures/NTCDGRGN220149.JPG', 'Active', '2023-04-18 14:21:04'),
(183, 'ALENG-AJI  ABDUL-JALIL', '8', '5', 'NTCDGRGN220150', NULL, 'pictures/NTCDGRGN220150.JPG', 'Active', '2023-04-18 14:21:04'),
(184, 'SIRINA  IBRAHIM', '8', '5', 'NTCDGRGN220151', NULL, 'pictures/NTCDGRGN220151.JPG', 'Active', '2023-04-18 14:21:04'),
(185, 'YAKUBU  HAWA', '8', '5', 'NTCDGRGN220152', NULL, 'pictures/NTCDGRGN220152.JPG', 'Active', '2023-04-18 14:21:04'),
(186, 'AKOR DAWUDA AMAMA', '8', '5', 'NTCDGRGN220153', NULL, 'pictures/NTCDGRGN220153.JPG', 'Active', '2023-04-18 14:21:04'),
(187, 'RAFIA  MAHAMADU', '8', '5', 'NTCDGRGN220154', NULL, 'pictures/NTCDGRGN220154.JPG', 'Active', '2023-04-18 14:21:04'),
(188, 'BABA  ALHASSAN', '8', '5', 'NTCDGRGN220155', NULL, 'pictures/NTCDGRGN220155.JPG', 'Active', '2023-04-18 14:21:04'),
(189, 'FUSEINI  SAWUDE', '8', '5', 'NTCDGRGN220156', NULL, 'pictures/NTCDGRGN220156.JPG', 'Active', '2023-04-18 14:21:04'),
(190, 'ADAM RAMATU JANICE', '8', '5', 'NTCDGRGN220157', NULL, 'pictures/NTCDGRGN220157.JPG', 'Active', '2023-04-18 14:21:04'),
(191, 'MAFATIHATU  ALHASSAN', '8', '5', 'NTCDGRGN220159', NULL, 'pictures/NTCDGRGN220159.JPG', 'Active', '2023-04-18 14:21:04'),
(192, 'HAFIZ BRAIMAH APUSIGA ', '8', '5', 'NTCDGRGN220160', NULL, 'pictures/NTCDGRGN220160.JPG', 'Active', '2023-04-18 14:21:04'),
(193, 'EUNICE BIRAGO POKUAA', '8', '5', 'NTCDGRGN220161', NULL, 'pictures/NTCDGRGN220161.JPG', 'Active', '2023-04-18 14:21:04'),
(194, 'VIVIAN   OBENG BOATEMAA ', '8', '5', 'NTCDGRGN220163', NULL, 'pictures/NTCDGRGN220163.JPG', 'Active', '2023-04-18 14:21:04'),
(195, 'JAMES NAMIDI NOANTEEB', '8', '5', 'NTCDGRGN220164', NULL, 'pictures/NTCDGRGN220164.JPG', 'Active', '2023-04-18 14:21:04'),
(196, 'MUMUNI ABDUL RAHIN DARAKU', '8', '5', 'NTCDGRGN220165', NULL, 'pictures/NTCDGRGN220165.JPG', 'Active', '2023-04-18 14:21:04'),
(197, 'ERNESTINA  ADISHI', '8', '5', 'NTCDGRGN220166', NULL, 'pictures/NTCDGRGN220166.JPG', 'Active', '2023-04-18 14:21:04'),
(198, 'KOMPITIK DAVID MINLOOM', '8', '5', 'NTCDGRGN220167', NULL, 'pictures/NTCDGRGN220167.JPG', 'Active', '2023-04-18 14:21:04'),
(199, 'CHRISTIANA   ATAMBILA', '8', '5', 'NTCDGRGN220168', NULL, 'pictures/NTCDGRGN220168.JPG', 'Active', '2023-04-18 14:21:04'),
(200, 'HANANA  HARUNA', '8', '5', 'NTCDGRGN220169', NULL, 'pictures/NTCDGRGN220169.JPG', 'Active', '2023-04-18 14:21:04'),
(201, 'MUNIRU   ZAKARIA ', '8', '5', 'NTCDGRGN220170', NULL, 'pictures/NTCDGRGN220170.JPG', 'Active', '2023-04-18 14:21:04'),
(202, 'SUMAIYA   SULLEYMAN', '8', '5', 'NTCDGRGN220171', NULL, 'pictures/NTCDGRGN220171.JPG', 'Active', '2023-04-18 14:21:04'),
(203, 'HALIMA  SUALLAH', '8', '5', 'NTCDGRGN220172', NULL, 'pictures/NTCDGRGN220172.JPG', 'Active', '2023-04-18 14:21:04'),
(204, 'IBRAHIM  ABDUL-RAZAK', '8', '5', 'NTCDGRGN220173', NULL, 'pictures/NTCDGRGN220173.JPG', 'Active', '2023-04-18 14:21:04'),
(205, 'FRANCIS  SIABNAAN JUAB', '8', '5', 'NTCDGRGN220174', NULL, 'pictures/NTCDGRGN220174.JPG', 'Active', '2023-04-18 14:21:04'),
(206, 'SOLIA  HUMU', '8', '5', 'NTCDGRGN220175', NULL, 'pictures/NTCDGRGN220175.JPG', 'Active', '2023-04-18 14:21:04'),
(207, 'ABDUL-RAZAK  MAHAMMUD', '8', '5', 'NTCDGRGN220176', NULL, 'pictures/NTCDGRGN220176.JPG', 'Active', '2023-04-18 14:21:04'),
(208, 'MUSIBA ALHASSAN KOJI', '8', '5', 'NTCDGRGN220177', NULL, 'pictures/NTCDGRGN220177.JPG', 'Active', '2023-04-18 14:21:04'),
(209, 'FUSIENA  MUSAH', '8', '5', 'NTCDGRGN220178', NULL, 'pictures/NTCDGRGN220178.JPG', 'Active', '2023-04-18 14:21:04'),
(210, 'BEATRICE OWUSU BOAKYE', '8', '5', 'NTCDGRGN220179', NULL, 'pictures/NTCDGRGN220179.JPG', 'Active', '2023-04-18 14:21:04'),
(211, 'AMAMATU   ISSAHAKU ', '8', '5', 'NTCDGRGN220180', NULL, 'pictures/NTCDGRGN220180.JPG', 'Active', '2023-04-18 14:21:04'),
(212, 'MERCY ARGOH OWUSU', '8', '5', 'NTCDGRGN220181', NULL, 'pictures/NTCDGRGN220181.JPG', 'Active', '2023-04-18 14:21:04'),
(213, 'DOBARA  RAKIA', '8', '5', 'NTCDGRGN220182', NULL, 'pictures/NTCDGRGN220182.JPG', 'Active', '2023-04-18 14:21:04'),
(214, 'ADAAYUGA FAIZA BLESSING', '8', '5', 'NTCDGRGN220183', NULL, 'pictures/NTCDGRGN220183.JPG', 'Active', '2023-04-18 14:21:04'),
(215, 'GILBERT  NINGYUO', '8', '5', 'NTCDGRGN220184', NULL, 'pictures/NTCDGRGN220184.JPG', 'Active', '2023-04-18 14:21:04'),
(216, 'FLORENCE MANTEBEA ATEKO', '8', '5', 'NTCDGRGN220185', NULL, 'pictures/NTCDGRGN220185.JPG', 'Active', '2023-04-18 14:21:04'),
(217, 'ABDUL FATAWU HIKIMATU DIN-NANI', '8', '5', 'NTCDGRGN220186', NULL, 'pictures/NTCDGRGN220186.JPG', 'Active', '2023-04-18 14:21:04'),
(218, 'MUSAH ZEINAB', '8', '5', 'NTCDGRGN220187', NULL, 'pictures/NTCDGRGN220187.JPG', 'Active', '2023-04-18 14:21:04'),
(219, 'ATCHULO ISSIFU FIRDAWS', '8', '5', 'NTCDGRGN220188', NULL, 'pictures/NTCDGRGN220188.JPG', 'Active', '2023-04-18 14:21:04'),
(220, 'DAWUDA SUHAILA', '8', '5', 'NTCDGRGN220189', NULL, 'pictures/NTCDGRGN220189.JPG', 'Active', '2023-04-18 14:21:04'),
(221, 'JAFARU  FAIKA', '8', '4', '8934839128302', '0208247911', 'pictures/IMG_1628.JPG', 'Active', '2023-04-20 00:57:09'),
(222, 'Aloysius Naabevuumi Kuumile', '8', '4', '1010070057', '+233242676192', 'pictures/1504895817549.jpg', 'Active', '2023-06-06 09:27:23'),
(223, 'Dr. Twum ', '10', '8', '123456', 'Kofi', 'pictures/Base-Register-Addressing-Mode-Addressing-Modes.png', 'Active', '2023-08-12 08:54:49');

-- --------------------------------------------------------

--
-- Table structure for table `st_cardtb`
--

CREATE TABLE `st_cardtb` (
  `sid` int(11) NOT NULL,
  `uid` int(11) DEFAULT NULL,
  `idnumber` varchar(50) DEFAULT NULL,
  `title` varchar(250) DEFAULT NULL,
  `subject` varchar(200) NOT NULL,
  `vdate` date DEFAULT NULL,
  `month` varchar(150) NOT NULL,
  `status` varchar(50) DEFAULT NULL,
  `dor` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `st_cardtb`
--

INSERT INTO `st_cardtb` (`sid`, `uid`, `idnumber`, `title`, `subject`, `vdate`, `month`, `status`, `dor`) VALUES
(2, 42, 'NTCDGRGN220002', 'Class Attendance', '', '2023-04-20', '', 'Active', '2023-04-20 20:31:28'),
(3, 42, 'NTCDGRGN220002', 'Examination Attendance', '', '2023-04-20', '', 'Active', '2023-04-20 20:32:13'),
(4, 42, 'NTCDGRGN220003', 'Class Attendance', '', '2023-04-20', '', 'Active', '2023-04-20 21:29:35'),
(5, 42, 'NTCDGRGN220005', 'Class Attendance', '', '2023-04-20', '', 'Active', '2023-04-20 21:29:55'),
(6, 42, 'NTCDGRGN220007', 'Class Attendance', '', '2023-04-20', '', 'Active', '2023-04-20 21:30:11'),
(7, 42, 'NTCDGRGN220001', 'Class Attendance', '', '2023-04-20', '', 'Active', '2023-04-20 21:30:29'),
(8, 42, 'NTCDGRGN220008', 'Class Attendance', '', '2023-04-20', '', 'Active', '2023-04-20 21:31:20'),
(9, 42, 'NTCDGRGN220006', 'Class Attendance', '', '2023-04-20', '', 'Active', '2023-04-20 21:31:29'),
(10, 42, 'NTCDGRGN220006', 'Examination Attendance', '', '2023-04-20', '', 'Active', '2023-04-20 21:35:28'),
(11, 42, 'NTCDGRGN220008', 'Examination Attendance', '', '2023-04-20', '', 'Active', '2023-04-20 21:35:35'),
(12, 42, 'NTCDGRGN220001', 'Class Attendance', '', '2023-04-22', '', 'Active', '2023-04-22 16:57:25'),
(13, 42, 'NTCDGRGN220004', 'Class Attendance', '', '2023-04-22', '', 'Active', '2023-04-22 16:58:37'),
(14, 42, 'NTCDGRGN220008', 'Class Attendance', '', '2023-04-22', '', 'Active', '2023-04-22 17:23:00'),
(15, 42, 'NTCDGRGN220003', 'Class Attendance', '', '2023-04-22', '', 'Active', '2023-04-22 17:23:20'),
(16, 42, 'NTCDGRGN220007', 'Class Attendance', '', '2023-04-22', '', 'Active', '2023-04-22 17:23:35'),
(17, 42, 'NTCDGRGN220005', 'Class Attendance', '', '2023-04-22', '', 'Active', '2023-04-22 17:23:41'),
(18, 42, 'NTCDGRGN220006', 'Class Attendance', '', '2023-04-22', '', 'Active', '2023-04-22 17:23:52'),
(19, 42, 'NTCDGRGN220004', 'Class Attendance', '', '2023-04-23', '', 'Active', '2023-04-23 07:17:19'),
(20, 42, 'NTCDGRGN220008', 'Class Attendance', '', '2023-05-21', '', 'Active', '2023-05-21 18:31:56'),
(21, 42, 'NTCDGRGN220007', 'Class Attendance', '', '2023-05-21', '', 'Active', '2023-05-21 18:32:11'),
(23, 42, 'NTCDGRGN220001', 'Class Attendance', '3', '2023-05-24', 'May', 'Active', '2023-05-24 00:44:40'),
(24, 42, 'NTCDGRGN220002', 'Examination Attendance', '10', '2023-05-24', 'May', 'Active', '2023-05-24 01:01:00'),
(25, 42, 'NTCDGRGN220002', 'Class Attendance', '10', '2023-05-24', 'May', 'Active', '2023-05-24 01:01:47'),
(26, 42, 'NTCDGRGN220003', 'Class Attendance', '4', '2023-05-24', 'May', 'Active', '2023-05-24 01:05:59'),
(27, 42, 'NTCDGRGN220003', 'Examination Attendance', '4', '2023-05-24', 'May', 'Active', '2023-05-24 01:06:06'),
(28, 42, 'NTCDGRGN220004', 'Examination Attendance', '4', '2023-05-24', 'May', 'Active', '2023-05-24 01:06:18'),
(29, 42, 'NTCDGRGN220005', 'Examination Attendance', '4', '2023-05-24', 'May', 'Active', '2023-05-24 01:06:25'),
(30, 42, 'NTCDGRGN220001', 'Class Attendance', '4', '2023-05-24', 'May', 'Inactive', '2023-05-24 01:09:32'),
(31, 42, 'NTCDGRGN220001', 'Class Attendance', '3', '2023-05-25', 'May', 'Inactive', '2023-05-24 22:18:24'),
(32, 42, 'NTCDGRGN220002', 'Class Attendance', '3', '2023-05-25', 'May', 'Active', '2023-05-24 22:18:32'),
(33, 42, 'NTCDGRGN220003', 'Class Attendance', '3', '2023-05-25', 'May', 'Active', '2023-05-24 22:18:37'),
(34, 42, 'NTCDGRGN220004', 'Class Attendance', '3', '2023-05-25', 'May', 'Active', '2023-05-24 22:18:44'),
(35, 42, 'NTCDGRGN220002', 'Class Attendance', '3', '2023-06-06', 'Jun', 'Active', '2023-06-06 09:44:09'),
(36, 42, 'NTCDGRGN220001', 'Class Attendance', '3', '2023-06-06', 'Jun', 'Active', '2023-06-06 09:46:25'),
(37, 42, 'NTCDGRGN220003', 'Class Attendance', '3', '2023-06-06', 'Jun', 'Active', '2023-06-06 09:46:44'),
(38, 42, 'NTCDGRGN220004', 'Class Attendance', '3', '2023-06-06', 'Jun', 'Active', '2023-06-06 09:46:56'),
(39, 42, 'NTCDGRGN220005', 'Class Attendance', '3', '2023-06-06', 'Jun', 'Active', '2023-06-06 09:47:02'),
(40, 42, 'NTCDGRGN220006', 'Class Attendance', '3', '2023-06-06', 'Jun', 'Active', '2023-06-06 09:47:11');

-- --------------------------------------------------------

--
-- Table structure for table `subjecttb`
--

CREATE TABLE `subjecttb` (
  `sbj` int(11) NOT NULL,
  `code` varchar(50) DEFAULT NULL,
  `subject` varchar(200) DEFAULT NULL,
  `program` int(10) DEFAULT NULL,
  `dor` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subjecttb`
--

INSERT INTO `subjecttb` (`sbj`, `code`, `subject`, `program`, `dor`) VALUES
(3, 'PHN321', 'PUBLIC HEALTH NURSING', 8, '2023-05-23 08:37:49'),
(4, 'RGN 217', 'PHARMACOLOGY', 8, '2023-05-23 08:38:16'),
(5, 'ADJ 111', 'PROFESSIONAL ADJUSTMENT IN NURSING', 8, '2023-05-23 08:38:49'),
(6, 'NAC 124', 'INTRO. PHC/OREIENTATION TO CHPS', 10, '2023-05-23 08:39:27'),
(7, 'ITC 011', 'THERAPEUTIC COMMUNICATION', 10, '2023-05-23 08:40:02'),
(8, 'RGN 312', 'PAEDIATRIC NURSING I', 8, '2023-05-23 08:40:32'),
(9, 'STA 211', 'STATISTIC', 8, '2023-05-23 08:41:05'),
(10, 'TCM 111', 'THERAPEUTIC COMMUNICATION', 8, '2023-05-23 08:41:47'),
(11, 'IBS 011', 'INTRO. BEHAVIORAL SCIENCES', 10, '2023-05-23 08:42:55'),
(12, 'RGN 213', 'MEDICINE & MEDICAL NURSING I', 8, '2023-05-23 08:43:57'),
(13, 'NAC 011', 'INTRO. HUMAN ANATOMY & PHYSIOLOGY', 10, '2023-05-23 08:44:53'),
(14, 'ION 031', 'INTRO. OBSTETRIC NURSING', 10, '2023-05-23 08:45:31');

-- --------------------------------------------------------

--
-- Table structure for table `teachertb`
--

CREATE TABLE `teachertb` (
  `tid` int(11) NOT NULL,
  `teacher` varchar(150) DEFAULT NULL,
  `dor` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_account`
--

CREATE TABLE `user_account` (
  `uid` int(11) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `role` varchar(50) NOT NULL,
  `dor` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_account`
--

INSERT INTO `user_account` (`uid`, `username`, `name`, `email`, `password`, `role`, `dor`) VALUES
(42, 'kuumile', 'Kuumile Aloysius Naabevuumi', 'aloysius.n.kuumile@gmail.com', 'password', '', '2023-04-08 12:17:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `klass`
--
ALTER TABLE `klass`
  ADD PRIMARY KEY (`kid`);

--
-- Indexes for table `program`
--
ALTER TABLE `program`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `student_account`
--
ALTER TABLE `student_account`
  ADD PRIMARY KEY (`stid`);

--
-- Indexes for table `st_cardtb`
--
ALTER TABLE `st_cardtb`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `subjecttb`
--
ALTER TABLE `subjecttb`
  ADD PRIMARY KEY (`sbj`);

--
-- Indexes for table `teachertb`
--
ALTER TABLE `teachertb`
  ADD PRIMARY KEY (`tid`);

--
-- Indexes for table `user_account`
--
ALTER TABLE `user_account`
  ADD PRIMARY KEY (`uid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `klass`
--
ALTER TABLE `klass`
  MODIFY `kid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `program`
--
ALTER TABLE `program`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `student_account`
--
ALTER TABLE `student_account`
  MODIFY `stid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=224;

--
-- AUTO_INCREMENT for table `st_cardtb`
--
ALTER TABLE `st_cardtb`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `subjecttb`
--
ALTER TABLE `subjecttb`
  MODIFY `sbj` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `teachertb`
--
ALTER TABLE `teachertb`
  MODIFY `tid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_account`
--
ALTER TABLE `user_account`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
