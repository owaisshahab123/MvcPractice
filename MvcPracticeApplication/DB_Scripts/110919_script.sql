USE [master]
GO
/****** Object:  Database [MvcPractice]    Script Date: 11/09/19 8:03:02 PM ******/
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
/****** Object:  Table [dbo].[AuditUser]    Script Date: 11/09/19 8:03:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AuditUser](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[UserID] [int] NULL,
	[EmailAddress] [nvarchar](500) NULL,
	[Audit_Created_At] [datetime] NULL,
	[Created_At] [datetime] NULL,
	[Created_By] [int] NULL,
	[Updated_At] [datetime] NULL,
	[Updated_By] [int] NULL,
	[Deleted_At] [datetime] NULL,
	[Deleted_By] [int] NULL,
	[IsDeleted] [bit] NULL,
	[IsActive] [int] NULL
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[EntryExitLogs]    Script Date: 11/09/19 8:03:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EntryExitLogs](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[UserID] [int] NULL,
	[EntryDateTime] [datetime] NULL,
	[ExitDateTime] [datetime] NULL,
	[Status] [bit] NULL,
	[MacAddress] [nvarchar](500) NULL,
	[IP_Address] [nvarchar](50) NULL,
	[EntryExitCheck] [nvarchar](50) NULL,
 CONSTRAINT [PK_EntryExitLogs] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ErrorLogs]    Script Date: 11/09/19 8:03:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[ErrorLogs](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[ErrorMsg] [nvarchar](500) NULL,
	[StackTrace] [varchar](8000) NULL,
	[Location] [varchar](500) NULL,
	[LoginUser] [varchar](50) NULL,
	[CreatedDateTime] [datetime] NULL,
 CONSTRAINT [PK_ErrorLogs] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Roles]    Script Date: 11/09/19 8:03:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](500) NULL,
 CONSTRAINT [PK_Roles] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[SchoolClasses]    Script Date: 11/09/19 8:03:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SchoolClasses](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[ClassName] [nvarchar](50) NOT NULL,
	[ClassDescription] [nvarchar](500) NULL,
	[IsActive] [bit] NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_SchoolClasses] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[UserPermission]    Script Date: 11/09/19 8:03:02 PM ******/
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
	[Role] [int] NOT NULL,
	[IsActive] [bit] NULL,
 CONSTRAINT [PK_UserPermission] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[UserProfile]    Script Date: 11/09/19 8:03:02 PM ******/
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
	[First_Name] [nvarchar](500) NULL,
	[Last_Name] [nvarchar](500) NULL,
	[EmailAddress] [nvarchar](500) NULL,
	[Password] [nvarchar](500) NULL,
	[Created_At] [datetime] NULL,
	[Created_By] [int] NULL,
	[Updated_At] [datetime] NULL,
	[Updated_By] [int] NULL,
	[Deleted_At] [datetime] NULL,
	[Deleted_By] [int] NULL,
	[IsDeleted] [bit] NULL,
	[ContactNumber] [nvarchar](100) NULL,
	[Email] [varchar](100) NULL,
	[Class] [int] NULL,
	[DOB] [datetime] NULL,
	[FatherGuardians] [nvarchar](50) NULL,
 CONSTRAINT [PK_UserProfile] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[AuditUser] ON 

INSERT [dbo].[AuditUser] ([ID], [UserID], [EmailAddress], [Audit_Created_At], [Created_At], [Created_By], [Updated_At], [Updated_By], [Deleted_At], [Deleted_By], [IsDeleted], [IsActive]) VALUES (1, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[AuditUser] ([ID], [UserID], [EmailAddress], [Audit_Created_At], [Created_At], [Created_By], [Updated_At], [Updated_By], [Deleted_At], [Deleted_By], [IsDeleted], [IsActive]) VALUES (2, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[AuditUser] ([ID], [UserID], [EmailAddress], [Audit_Created_At], [Created_At], [Created_By], [Updated_At], [Updated_By], [Deleted_At], [Deleted_By], [IsDeleted], [IsActive]) VALUES (3, 9, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[AuditUser] ([ID], [UserID], [EmailAddress], [Audit_Created_At], [Created_At], [Created_By], [Updated_At], [Updated_By], [Deleted_At], [Deleted_By], [IsDeleted], [IsActive]) VALUES (4, 10, NULL, CAST(N'2019-09-11 20:01:36.757' AS DateTime), NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[AuditUser] OFF
SET IDENTITY_INSERT [dbo].[EntryExitLogs] ON 

INSERT [dbo].[EntryExitLogs] ([ID], [UserID], [EntryDateTime], [ExitDateTime], [Status], [MacAddress], [IP_Address], [EntryExitCheck]) VALUES (1, 1, NULL, CAST(N'2019-09-10 10:54:46.580' AS DateTime), 1, NULL, NULL, N'Exit')
INSERT [dbo].[EntryExitLogs] ([ID], [UserID], [EntryDateTime], [ExitDateTime], [Status], [MacAddress], [IP_Address], [EntryExitCheck]) VALUES (2, 1, CAST(N'2019-09-10 11:15:57.720' AS DateTime), NULL, 1, NULL, NULL, N'Enter')
INSERT [dbo].[EntryExitLogs] ([ID], [UserID], [EntryDateTime], [ExitDateTime], [Status], [MacAddress], [IP_Address], [EntryExitCheck]) VALUES (3, 1, CAST(N'2019-09-10 11:30:30.943' AS DateTime), NULL, 1, NULL, NULL, N'Enter')
INSERT [dbo].[EntryExitLogs] ([ID], [UserID], [EntryDateTime], [ExitDateTime], [Status], [MacAddress], [IP_Address], [EntryExitCheck]) VALUES (4, 1, CAST(N'2019-09-10 11:40:19.373' AS DateTime), NULL, 1, NULL, NULL, N'Enter')
INSERT [dbo].[EntryExitLogs] ([ID], [UserID], [EntryDateTime], [ExitDateTime], [Status], [MacAddress], [IP_Address], [EntryExitCheck]) VALUES (5, 1, NULL, CAST(N'2019-09-10 11:41:02.907' AS DateTime), 1, NULL, NULL, N'Exit')
SET IDENTITY_INSERT [dbo].[EntryExitLogs] OFF
SET IDENTITY_INSERT [dbo].[ErrorLogs] ON 

INSERT [dbo].[ErrorLogs] ([ID], [ErrorMsg], [StackTrace], [Location], [LoginUser], [CreatedDateTime]) VALUES (1, N'testing', N'stacktrace', N'location', N'login', CAST(N'2019-09-09 07:06:55.493' AS DateTime))
INSERT [dbo].[ErrorLogs] ([ID], [ErrorMsg], [StackTrace], [Location], [LoginUser], [CreatedDateTime]) VALUES (2, N'Input string was not in a correct format.', N'   at System.Number.StringToNumber(String str, NumberStyles options, NumberBuffer& number, NumberFormatInfo info, Boolean parseDecimal)
   at System.Number.ParseInt32(String s, NumberStyles style, NumberFormatInfo info)
   at System.Convert.ToInt32(String value)
   at MvcApiApplication.Controllers.UserController.CreateAndModifyUserEntry(UserProfileCustom upc) in E:\bitbucket\MvcPractice\MvcApiApplication\Controllers\UserApiController.cs:line 35', N'UserApiController_CreateAndModifyUserEntry', N'test', CAST(N'2019-09-09 07:10:59.690' AS DateTime))
INSERT [dbo].[ErrorLogs] ([ID], [ErrorMsg], [StackTrace], [Location], [LoginUser], [CreatedDateTime]) VALUES (3, N'dfdx is not defined', N'NULL', N'UserEntry', N'Javascript', CAST(N'2019-09-10 10:02:56.340' AS DateTime))
INSERT [dbo].[ErrorLogs] ([ID], [ErrorMsg], [StackTrace], [Location], [LoginUser], [CreatedDateTime]) VALUES (4, N'dfdx is not defined', N'NULL', N'UserEntry', N'1', CAST(N'2019-09-10 10:15:19.503' AS DateTime))
SET IDENTITY_INSERT [dbo].[ErrorLogs] OFF
SET IDENTITY_INSERT [dbo].[Roles] ON 

INSERT [dbo].[Roles] ([ID], [Name], [Description]) VALUES (1, N'Student', NULL)
INSERT [dbo].[Roles] ([ID], [Name], [Description]) VALUES (2, N'Employee', NULL)
INSERT [dbo].[Roles] ([ID], [Name], [Description]) VALUES (3, N'Admin', NULL)
INSERT [dbo].[Roles] ([ID], [Name], [Description]) VALUES (4, N'SuperAdmin', NULL)
SET IDENTITY_INSERT [dbo].[Roles] OFF
SET IDENTITY_INSERT [dbo].[SchoolClasses] ON 

INSERT [dbo].[SchoolClasses] ([ID], [ClassName], [ClassDescription], [IsActive], [IsDeleted]) VALUES (1, N'Nursury', NULL, 1, NULL)
INSERT [dbo].[SchoolClasses] ([ID], [ClassName], [ClassDescription], [IsActive], [IsDeleted]) VALUES (2, N'KG 1', NULL, 1, NULL)
INSERT [dbo].[SchoolClasses] ([ID], [ClassName], [ClassDescription], [IsActive], [IsDeleted]) VALUES (3, N'KG 2', NULL, 1, NULL)
INSERT [dbo].[SchoolClasses] ([ID], [ClassName], [ClassDescription], [IsActive], [IsDeleted]) VALUES (4, N'1', NULL, 1, NULL)
INSERT [dbo].[SchoolClasses] ([ID], [ClassName], [ClassDescription], [IsActive], [IsDeleted]) VALUES (5, N'2', NULL, 1, NULL)
INSERT [dbo].[SchoolClasses] ([ID], [ClassName], [ClassDescription], [IsActive], [IsDeleted]) VALUES (6, N'3', NULL, 1, NULL)
INSERT [dbo].[SchoolClasses] ([ID], [ClassName], [ClassDescription], [IsActive], [IsDeleted]) VALUES (7, N'4', NULL, 1, NULL)
INSERT [dbo].[SchoolClasses] ([ID], [ClassName], [ClassDescription], [IsActive], [IsDeleted]) VALUES (8, N'5', NULL, 1, NULL)
INSERT [dbo].[SchoolClasses] ([ID], [ClassName], [ClassDescription], [IsActive], [IsDeleted]) VALUES (9, N'6', NULL, 1, NULL)
INSERT [dbo].[SchoolClasses] ([ID], [ClassName], [ClassDescription], [IsActive], [IsDeleted]) VALUES (10, N'7', NULL, 1, NULL)
INSERT [dbo].[SchoolClasses] ([ID], [ClassName], [ClassDescription], [IsActive], [IsDeleted]) VALUES (11, N'8', NULL, 1, NULL)
INSERT [dbo].[SchoolClasses] ([ID], [ClassName], [ClassDescription], [IsActive], [IsDeleted]) VALUES (12, N'9', NULL, 1, NULL)
INSERT [dbo].[SchoolClasses] ([ID], [ClassName], [ClassDescription], [IsActive], [IsDeleted]) VALUES (13, N'10', NULL, 1, NULL)
INSERT [dbo].[SchoolClasses] ([ID], [ClassName], [ClassDescription], [IsActive], [IsDeleted]) VALUES (14, N'11', NULL, 1, NULL)
INSERT [dbo].[SchoolClasses] ([ID], [ClassName], [ClassDescription], [IsActive], [IsDeleted]) VALUES (15, N'12', NULL, 1, NULL)
SET IDENTITY_INSERT [dbo].[SchoolClasses] OFF
SET IDENTITY_INSERT [dbo].[UserPermission] ON 

INSERT [dbo].[UserPermission] ([ID], [PageName], [PageURL], [Role], [IsActive]) VALUES (1, N'GetAllClasses', N'User/GetAllClasses', 1, 1)
INSERT [dbo].[UserPermission] ([ID], [PageName], [PageURL], [Role], [IsActive]) VALUES (2, N'CreateAndModifyUserEntry', N'User/CreateAndModifyUserEntry', 1, 1)
INSERT [dbo].[UserPermission] ([ID], [PageName], [PageURL], [Role], [IsActive]) VALUES (3, N'UserEntry', N'User/UserEntry', 1, 1)
INSERT [dbo].[UserPermission] ([ID], [PageName], [PageURL], [Role], [IsActive]) VALUES (4, N'User/test', N'User/test', 1, 1)
INSERT [dbo].[UserPermission] ([ID], [PageName], [PageURL], [Role], [IsActive]) VALUES (5, N'GetAllUsers', N'User/GetAllUsers', 1, 1)
INSERT [dbo].[UserPermission] ([ID], [PageName], [PageURL], [Role], [IsActive]) VALUES (6, N'UserList', N'User/UserList', 1, 1)
INSERT [dbo].[UserPermission] ([ID], [PageName], [PageURL], [Role], [IsActive]) VALUES (7, N'GetUserByID', N'User/GetUserByID', 1, 1)
INSERT [dbo].[UserPermission] ([ID], [PageName], [PageURL], [Role], [IsActive]) VALUES (8, N'DeleteUser', N'User/DeleteUser', 1, 1)
INSERT [dbo].[UserPermission] ([ID], [PageName], [PageURL], [Role], [IsActive]) VALUES (9, N'GetErrorLogs', N'User/GetErrorLogs', 1, 1)
INSERT [dbo].[UserPermission] ([ID], [PageName], [PageURL], [Role], [IsActive]) VALUES (10, N'ErrorLogs', N'User/ErrorLogs', 1, 1)
INSERT [dbo].[UserPermission] ([ID], [PageName], [PageURL], [Role], [IsActive]) VALUES (11, N'FrontEndErrorLogs', N'User/FrontEndErrorLogs', 1, 1)
SET IDENTITY_INSERT [dbo].[UserPermission] OFF
SET IDENTITY_INSERT [dbo].[UserProfile] ON 

INSERT [dbo].[UserProfile] ([ID], [Role_ID], [IsActive], [First_Name], [Last_Name], [EmailAddress], [Password], [Created_At], [Created_By], [Updated_At], [Updated_By], [Deleted_At], [Deleted_By], [IsDeleted], [ContactNumber], [Email], [Class], [DOB], [FatherGuardians]) VALUES (1, 1, 1, N'Super Admin (master)', N'Last_Name', N'admin@admin.com', N'PLoTtVbiGpY=', NULL, 1, NULL, NULL, NULL, NULL, NULL, N'00000', N'admin@admin.com', NULL, NULL, NULL)
INSERT [dbo].[UserProfile] ([ID], [Role_ID], [IsActive], [First_Name], [Last_Name], [EmailAddress], [Password], [Created_At], [Created_By], [Updated_At], [Updated_By], [Deleted_At], [Deleted_By], [IsDeleted], [ContactNumber], [Email], [Class], [DOB], [FatherGuardians]) VALUES (3, NULL, 1, N'owais', NULL, NULL, NULL, CAST(N'2019-08-29 23:58:52.530' AS DateTime), NULL, NULL, NULL, CAST(N'2019-09-06 23:25:44.730' AS DateTime), 1, 1, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[UserProfile] ([ID], [Role_ID], [IsActive], [First_Name], [Last_Name], [EmailAddress], [Password], [Created_At], [Created_By], [Updated_At], [Updated_By], [Deleted_At], [Deleted_By], [IsDeleted], [ContactNumber], [Email], [Class], [DOB], [FatherGuardians]) VALUES (4, NULL, 1, NULL, NULL, NULL, NULL, CAST(N'2019-09-01 17:29:26.760' AS DateTime), NULL, NULL, NULL, CAST(N'2019-09-06 23:25:42.007' AS DateTime), 1, 1, N'1235645', NULL, 1, CAST(N'2019-08-12 00:00:00.000' AS DateTime), N'pakistan')
INSERT [dbo].[UserProfile] ([ID], [Role_ID], [IsActive], [First_Name], [Last_Name], [EmailAddress], [Password], [Created_At], [Created_By], [Updated_At], [Updated_By], [Deleted_At], [Deleted_By], [IsDeleted], [ContactNumber], [Email], [Class], [DOB], [FatherGuardians]) VALUES (5, NULL, 1, NULL, NULL, NULL, NULL, CAST(N'2019-09-02 02:52:24.987' AS DateTime), NULL, NULL, NULL, CAST(N'2019-09-06 23:25:39.733' AS DateTime), 1, 1, N'1235645', NULL, 0, CAST(N'2019-08-12 00:00:00.000' AS DateTime), N'pakistan')
INSERT [dbo].[UserProfile] ([ID], [Role_ID], [IsActive], [First_Name], [Last_Name], [EmailAddress], [Password], [Created_At], [Created_By], [Updated_At], [Updated_By], [Deleted_At], [Deleted_By], [IsDeleted], [ContactNumber], [Email], [Class], [DOB], [FatherGuardians]) VALUES (6, NULL, 1, NULL, NULL, NULL, NULL, CAST(N'2019-09-02 03:11:00.753' AS DateTime), NULL, NULL, NULL, CAST(N'2019-09-06 23:25:36.007' AS DateTime), 1, 1, N'1235645', NULL, 0, CAST(N'2019-08-12 00:00:00.000' AS DateTime), N'test')
INSERT [dbo].[UserProfile] ([ID], [Role_ID], [IsActive], [First_Name], [Last_Name], [EmailAddress], [Password], [Created_At], [Created_By], [Updated_At], [Updated_By], [Deleted_At], [Deleted_By], [IsDeleted], [ContactNumber], [Email], [Class], [DOB], [FatherGuardians]) VALUES (7, NULL, 1, NULL, NULL, N'pak@pak.com', N'11111', CAST(N'2019-09-02 03:20:25.873' AS DateTime), NULL, NULL, NULL, CAST(N'2019-09-06 23:25:32.697' AS DateTime), 1, 1, N'1111', NULL, 0, CAST(N'2019-08-12 00:00:00.000' AS DateTime), N'1111')
INSERT [dbo].[UserProfile] ([ID], [Role_ID], [IsActive], [First_Name], [Last_Name], [EmailAddress], [Password], [Created_At], [Created_By], [Updated_At], [Updated_By], [Deleted_At], [Deleted_By], [IsDeleted], [ContactNumber], [Email], [Class], [DOB], [FatherGuardians]) VALUES (8, NULL, 1, N'testing', N'testing', N'admin@testing.com', N'testing', CAST(N'2019-09-02 03:34:05.443' AS DateTime), NULL, NULL, NULL, CAST(N'2019-09-06 23:18:18.877' AS DateTime), 1, 1, N'1235645', NULL, 0, CAST(N'2019-08-12 00:00:00.000' AS DateTime), N'pakistan')
INSERT [dbo].[UserProfile] ([ID], [Role_ID], [IsActive], [First_Name], [Last_Name], [EmailAddress], [Password], [Created_At], [Created_By], [Updated_At], [Updated_By], [Deleted_At], [Deleted_By], [IsDeleted], [ContactNumber], [Email], [Class], [DOB], [FatherGuardians]) VALUES (9, NULL, NULL, N'testing', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[UserProfile] ([ID], [Role_ID], [IsActive], [First_Name], [Last_Name], [EmailAddress], [Password], [Created_At], [Created_By], [Updated_At], [Updated_By], [Deleted_At], [Deleted_By], [IsDeleted], [ContactNumber], [Email], [Class], [DOB], [FatherGuardians]) VALUES (10, NULL, NULL, N'testing 123', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[UserProfile] OFF
/****** Object:  StoredProcedure [dbo].[InsertEntryExitLogs]    Script Date: 11/09/19 8:03:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InsertEntryExitLogs]
(@UserID       INT,  
 @Status   BIT,
 @EntryExitCheck NVARCHAR(50)
)
AS
IF @EntryExitCheck = 'Enter'
    BEGIN
        INSERT INTO EntryExitLogs
        (UserID, 
         Status, 
         EntryDateTime, 
         EntryExitCheck
        )
        VALUES
        (@UserID, 
         @Status,  
         GETDATE(),
         @EntryExitCheck
        );
    END;
IF @EntryExitCheck = 'Exit'
    BEGIN
        INSERT INTO EntryExitLogs
        (UserID, 
         Status, 
         ExitDateTime,
         EntryExitCheck
        )
        VALUES
        (@UserID, 
         @Status,  
         GETDATE(),
         @EntryExitCheck
        );
    END;
GO
/****** Object:  StoredProcedure [dbo].[InsertErrorLogs]    Script Date: 11/09/19 8:03:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[InsertErrorLogs]
(@ErrorMsg       NVARCHAR(500), 
 @StackTrace        VARCHAR(8000), 
 @LoginUser   INT, 
 @Location   VARCHAR(500)
)
AS
    BEGIN
        INSERT INTO ErrorLogs
        (ErrorMsg, 
         StackTrace, 
         LoginUser, 
         Location,
         CreatedDateTime
        )
        VALUES
        (@ErrorMsg, 
         @StackTrace, 
         @LoginUser, 
         @Location,
         GETDATE()
        );
    END;

GO
USE [master]
GO
ALTER DATABASE [MvcPractice] SET  READ_WRITE 
GO
