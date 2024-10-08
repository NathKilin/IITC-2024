USE [master]
GO
/****** Object:  Database [My_Company]    Script Date: 8/20/2024 9:10:24 AM ******/
CREATE DATABASE [My_Company]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'My_Company', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\My_Company.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'My_Company_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\My_Company_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [My_Company] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [My_Company].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [My_Company] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [My_Company] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [My_Company] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [My_Company] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [My_Company] SET ARITHABORT OFF 
GO
ALTER DATABASE [My_Company] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [My_Company] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [My_Company] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [My_Company] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [My_Company] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [My_Company] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [My_Company] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [My_Company] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [My_Company] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [My_Company] SET  ENABLE_BROKER 
GO
ALTER DATABASE [My_Company] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [My_Company] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [My_Company] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [My_Company] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [My_Company] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [My_Company] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [My_Company] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [My_Company] SET RECOVERY FULL 
GO
ALTER DATABASE [My_Company] SET  MULTI_USER 
GO
ALTER DATABASE [My_Company] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [My_Company] SET DB_CHAINING OFF 
GO
ALTER DATABASE [My_Company] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [My_Company] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [My_Company] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [My_Company] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'My_Company', N'ON'
GO
ALTER DATABASE [My_Company] SET QUERY_STORE = ON
GO
ALTER DATABASE [My_Company] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [My_Company]
GO
/****** Object:  Table [dbo].[Accounting]    Script Date: 8/20/2024 9:10:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Accounting](
	[AccountingID] [int] NOT NULL,
	[Date] [date] NULL,
	[CreditDebit] [char](1) NULL,
	[Amount] [decimal](10, 2) NULL,
	[InvoiceID] [int] NULL,
	[OrderID] [int] NULL,
	[PaidAmount] [decimal](10, 2) NULL,
PRIMARY KEY CLUSTERED 
(
	[AccountingID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Addresses]    Script Date: 8/20/2024 9:10:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Addresses](
	[AddressID] [int] IDENTITY(1,1) NOT NULL,
	[FullAddress] [varchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[AddressID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customers]    Script Date: 8/20/2024 9:10:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customers](
	[CustomerID] [int] IDENTITY(1,1) NOT NULL,
	[CustomerType] [varchar](12) NULL,
	[CustomerStatus] [varchar](20) NULL,
	[FreezeID] [int] NULL,
	[OverCount] [int] NULL,
	[Name] [varchar](50) NULL,
	[DeliveryAddress] [varchar](50) NULL,
	[MailAddress] [varchar](50) NULL,
	[CreditCard] [varchar](25) NULL,
	[AddressID] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[CustomerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DeliveryFees]    Script Date: 8/20/2024 9:10:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DeliveryFees](
	[DeliveryID] [int] NOT NULL,
	[Description] [varchar](255) NULL,
	[DeliveryFee] [decimal](10, 2) NULL,
	[AddressID] [int] NULL,
	[FullAddress] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[DeliveryID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Discounts]    Script Date: 8/20/2024 9:10:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Discounts](
	[DiscountID] [int] NOT NULL,
	[DiscountPercentage] [decimal](5, 2) NULL,
	[CustomerType] [varchar](50) NULL,
	[Description] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[DiscountID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Invoice]    Script Date: 8/20/2024 9:10:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Invoice](
	[InvoiceID] [int] NOT NULL,
	[OrderID] [int] NULL,
	[Description] [varchar](255) NULL,
	[NumberUnits] [int] NULL,
	[TotalAmount] [decimal](10, 2) NULL,
PRIMARY KEY CLUSTERED 
(
	[InvoiceID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Items]    Script Date: 8/20/2024 9:10:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Items](
	[ItemID] [int] IDENTITY(1,1) NOT NULL,
	[ItemName] [varchar](100) NOT NULL,
	[Description] [varchar](255) NOT NULL,
	[UnitPrice] [decimal](10, 2) NOT NULL,
	[Avaliable] [bit] NOT NULL,
	[Saved] [int] NOT NULL,
	[Waiting] [int] NOT NULL,
	[Subscript] [varchar](100) NOT NULL,
	[Freq] [int] NOT NULL,
	[SuppDate] [date] NOT NULL,
	[OrderPercent] [decimal](5, 2) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[ItemID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Numbers]    Script Date: 8/20/2024 9:10:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Numbers](
	[NumberID] [int] NOT NULL,
	[LastOrder] [int] NULL,
	[LastSubscription] [int] NULL,
	[LastReceipt] [int] NULL,
	[LastInvoice] [int] NULL,
	[LastStockOrder] [int] NULL,
	[NumberUnits] [int] NULL,
	[TotalAmount] [decimal](10, 2) NULL,
PRIMARY KEY CLUSTERED 
(
	[NumberID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Orders]    Script Date: 8/20/2024 9:10:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orders](
	[OrderID] [int] IDENTITY(1,1) NOT NULL,
	[Date] [date] NOT NULL,
	[CustomerID] [int] NOT NULL,
	[ItemID] [int] NOT NULL,
	[DeliveryID] [int] NOT NULL,
	[SuppDate] [date] NOT NULL,
	[AddressID] [int] NULL,
	[FullAddress] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[OrderID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Payments]    Script Date: 8/20/2024 9:10:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Payments](
	[PaymentID] [int] NOT NULL,
	[PaymentDate] [date] NULL,
	[AmountPaid] [decimal](10, 2) NULL,
	[PaymentMethod] [varchar](50) NULL,
	[InvoiceID] [int] NULL,
	[ReceiptID] [int] NULL,
	[OrderID] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[PaymentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Profiles]    Script Date: 8/20/2024 9:10:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Profiles](
	[ProfileID] [int] NOT NULL,
	[ProfileName] [varchar](50) NULL,
	[AccessLevel] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[ProfileID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Receipt]    Script Date: 8/20/2024 9:10:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Receipt](
	[ReceiptID] [int] NOT NULL,
	[ReceiptDate] [date] NULL,
	[InvoiceID] [int] NULL,
	[OrderID] [int] NULL,
	[PaidAmount] [decimal](10, 2) NULL,
PRIMARY KEY CLUSTERED 
(
	[ReceiptID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[StockOrder]    Script Date: 8/20/2024 9:10:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StockOrder](
	[StockOrderID] [int] NOT NULL,
	[StockDate] [date] NULL,
	[ItemID] [int] NULL,
	[OrderID] [int] NULL,
	[Description] [varchar](255) NULL,
	[Quantity] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[StockOrderID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Subscription]    Script Date: 8/20/2024 9:10:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Subscription](
	[SubscriptionID] [int] NOT NULL,
	[Status] [varchar](50) NULL,
	[CustomerID] [int] NULL,
	[ItemID] [int] NULL,
	[Quantity] [int] NULL,
	[Frequency] [varchar](50) NULL,
	[DeliveryID] [int] NULL,
	[NextOrder] [date] NULL,
	[Expiration] [date] NULL,
	[OrderID] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[SubscriptionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 8/20/2024 9:10:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserName] [nvarchar](100) NOT NULL,
	[Profile] [nvarchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[UserName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Accounting]  WITH CHECK ADD FOREIGN KEY([InvoiceID])
REFERENCES [dbo].[Invoice] ([InvoiceID])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[Accounting]  WITH CHECK ADD FOREIGN KEY([OrderID])
REFERENCES [dbo].[Orders] ([OrderID])
GO
ALTER TABLE [dbo].[DeliveryFees]  WITH CHECK ADD FOREIGN KEY([AddressID])
REFERENCES [dbo].[Addresses] ([AddressID])
GO
ALTER TABLE [dbo].[Invoice]  WITH CHECK ADD FOREIGN KEY([OrderID])
REFERENCES [dbo].[Orders] ([OrderID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Orders_Addresses] FOREIGN KEY([AddressID])
REFERENCES [dbo].[Addresses] ([AddressID])
ON UPDATE CASCADE
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Orders_Addresses]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Orders_Customers] FOREIGN KEY([CustomerID])
REFERENCES [dbo].[Customers] ([CustomerID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Orders_Customers]
GO
ALTER TABLE [dbo].[Orders]  WITH CHECK ADD  CONSTRAINT [FK_Orders_Items] FOREIGN KEY([ItemID])
REFERENCES [dbo].[Items] ([ItemID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Orders] CHECK CONSTRAINT [FK_Orders_Items]
GO
ALTER TABLE [dbo].[Payments]  WITH CHECK ADD FOREIGN KEY([InvoiceID])
REFERENCES [dbo].[Invoice] ([InvoiceID])
ON UPDATE CASCADE
GO
ALTER TABLE [dbo].[Payments]  WITH CHECK ADD FOREIGN KEY([OrderID])
REFERENCES [dbo].[Orders] ([OrderID])
GO
ALTER TABLE [dbo].[Payments]  WITH CHECK ADD FOREIGN KEY([ReceiptID])
REFERENCES [dbo].[Receipt] ([ReceiptID])
GO
ALTER TABLE [dbo].[Receipt]  WITH CHECK ADD FOREIGN KEY([InvoiceID])
REFERENCES [dbo].[Invoice] ([InvoiceID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Receipt]  WITH CHECK ADD FOREIGN KEY([OrderID])
REFERENCES [dbo].[Orders] ([OrderID])
GO
ALTER TABLE [dbo].[StockOrder]  WITH CHECK ADD FOREIGN KEY([ItemID])
REFERENCES [dbo].[Items] ([ItemID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[StockOrder]  WITH CHECK ADD FOREIGN KEY([OrderID])
REFERENCES [dbo].[Orders] ([OrderID])
GO
ALTER TABLE [dbo].[Subscription]  WITH CHECK ADD FOREIGN KEY([CustomerID])
REFERENCES [dbo].[Customers] ([CustomerID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Subscription]  WITH CHECK ADD FOREIGN KEY([DeliveryID])
REFERENCES [dbo].[DeliveryFees] ([DeliveryID])
GO
ALTER TABLE [dbo].[Subscription]  WITH CHECK ADD FOREIGN KEY([ItemID])
REFERENCES [dbo].[Items] ([ItemID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Subscription]  WITH CHECK ADD FOREIGN KEY([OrderID])
REFERENCES [dbo].[Orders] ([OrderID])
GO
USE [master]
GO
ALTER DATABASE [My_Company] SET  READ_WRITE 
GO
