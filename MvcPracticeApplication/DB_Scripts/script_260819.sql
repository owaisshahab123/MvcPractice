USE [master]
GO
/****** Object:  Database [MvcPractice]    Script Date: 26/08/19 2:40:32 AM ******/
CREATE DATABASE [MvcPractice]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'MvcPractice', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER14\MSSQL\DATA\MvcPractice.mdf' , SIZE = 4096KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'MvcPractice_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER14\MSSQL\DATA\MvcPractice_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [MvcPractice] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [MvcPractice].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [MvcPractice] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [MvcPractice] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [MvcPractice] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [MvcPractice] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [MvcPractice] SET ARITHABORT OFF 
GO
ALTER DATABASE [MvcPractice] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [MvcPractice] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [MvcPractice] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [MvcPractice] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [MvcPractice] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [MvcPractice] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [MvcPractice] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [MvcPractice] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [MvcPractice] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [MvcPractice] SET  DISABLE_BROKER 
GO
ALTER DATABASE [MvcPractice] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [MvcPractice] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [MvcPractice] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [MvcPractice] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [MvcPractice] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [MvcPractice] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [MvcPractice] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [MvcPractice] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [MvcPractice] SET  MULTI_USER 
GO
ALTER DATABASE [MvcPractice] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [MvcPractice] SET DB_CHAINING OFF 
GO
ALTER DATABASE [MvcPractice] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [MvcPractice] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [MvcPractice] SET DELAYED_DURABILITY = DISABLED 
GO
USE [MvcPractice]
GO
/****** Object:  Table [dbo].[UserPermission]    Script Date: 26/08/19 2:40:32 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[UserPermission](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[PageName] [varchar](100) NULL,
	[PageURL] [varchar](500) NULL,
	[Order] [int] NULL,
	[Controller] [varchar](250) NULL,
	[Role] [int] NOT NULL,
	[IsActive] [bit] NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedBy] [int] NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedBy] [int] NULL,
	[DeletedDate] [datetime] NULL,
	[DeletedBy] [int] NULL,
	[UserID] [int] NULL,
 CONSTRAINT [PK_UserPermission] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[UserProfile]    Script Date: 26/08/19 2:40:32 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[UserProfile](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Role_ID] [int] NULL,
	[IsActive] [bit] NULL,
	[Fisrt_Name] [nvarchar](500) NULL,
	[Last_Name] [nvarchar](500) NULL,
	[User_ID] [nvarchar](500) NULL,
	[Password] [nvarchar](500) NULL,
	[Image] [nvarchar](500) NULL,
	[Created_At] [datetime] NULL,
	[Created_By] [int] NULL,
	[Updated_At] [datetime] NULL,
	[Updated_By] [int] NULL,
	[Deleted_At] [datetime] NULL,
	[Deleted_By] [int] NULL,
	[IsDleteted] [bit] NULL,
	[ContactNumber] [nvarchar](100) NULL,
	[Email] [varchar](100) NULL,
	[DeviceToken] [nvarchar](500) NULL,
	[DeviceType] [nvarchar](500) NULL,
 CONSTRAINT [PK_UserProfile] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[UserProfile] ON 

INSERT [dbo].[UserProfile] ([ID], [Role_ID], [IsActive], [Fisrt_Name], [Last_Name], [User_ID], [Password], [Image], [Created_At], [Created_By], [Updated_At], [Updated_By], [Deleted_At], [Deleted_By], [IsDleteted], [ContactNumber], [Email], [DeviceToken], [DeviceType]) VALUES (1, 1, 1, N'Super Admin (master)', N'Last_Name', N'admin@admin.com', N'15j8swY5pFc=', N'Image', NULL, 1, NULL, NULL, NULL, NULL, NULL, N'00000', N'admin@admin.com', NULL, NULL)
SET IDENTITY_INSERT [dbo].[UserProfile] OFF
USE [master]
GO
ALTER DATABASE [MvcPractice] SET  READ_WRITE 
GO
