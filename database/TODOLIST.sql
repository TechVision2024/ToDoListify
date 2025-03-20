

    --- ≈‰‘«¡ ÃœÊ· Users
CREATE TABLE Users (
    id INT IDENTITY(1,1) PRIMARY KEY,
    full_name NVARCHAR(255) NOT NULL,
    email NVARCHAR(255) UNIQUE NOT NULL,
    username NVARCHAR(255) UNIQUE NOT NULL,
    password NVARCHAR(max) NOT NULL,  
    salt NVARCHAR(max) NOT NULL,
    created_at DATETIME DEFAULT GETDATE(),
    updated_at DATETIME DEFAULT GETDATE(),
    status NVARCHAR(50) CHECK (status IN ('active', 'inactive')) DEFAULT 'active'
);
GO

      ---- ≈‰‘«¡ ÃœÊ· Tasks
CREATE TABLE Tasks (
    id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT NOT NULL, 
    title NVARCHAR(255) NOT NULL,
    body NVARCHAR(MAX) NULL,  
    status NVARCHAR(50) CHECK (status IN ('TO_DO', 'IN_PROGRESS', 'DONE')) DEFAULT 'TO_DO',
    priority NVARCHAR(20) CHECK (priority IN ('LOW', 'MEDIUM', 'HIGH')) DEFAULT 'MEDIUM',
    CONSTRAINT FK_Tasks_Users FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);
GO
