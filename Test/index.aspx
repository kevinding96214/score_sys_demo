<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="Test.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css" href="css/index.css" />
    <title>SCETC-ScoreSystem</title>
</head>
<body class="text-center">
    <form id="form1" runat="server">
        <div id="card">
            <div id="logo"></div>
            <section>Welcome To SCETC Score System</section>
            <div id="begin" class="btn btn-info" >Let's Start</div>
        </div>
        <div id="sys" style="display:none;" >
        <span id="close" class="glyphicon glyphicon-remove"></span>
            <table class="table-responsive">
                <tbody>
                <tr>
                    <th>StudentNum：</th>
                    <td><asp:TextBox ID="stuNum" runat="server" MaxLength="12" placeholder="please type in the id" /></td>
                    <th>StudentName：</th>
                    <td><asp:TextBox ID="stuName" runat="server" MaxLength="5" placeholder="please type in the name" /></td>
                </tr>
                <tr>
                    <th>Chinese：</th>
                    <td><asp:TextBox ID="chinese" runat="server" MaxLength="5" placeholder="please type in the score" /></td>
                    <th>Math：</th>
                    <td><asp:TextBox ID="math" runat="server" MaxLength="5" placeholder="please type in the score" /></td>
                </tr>
                <tr>
                    <th>English：</th>
                    <td><asp:TextBox ID="english" runat="server" MaxLength="5" placeholder="please type in the score" /></td>
                    <th>Physical：</th>
                    <td><asp:TextBox ID="physical" runat="server" MaxLength="5" placeholder="please type in the score" /></td>
                </tr>
                <tr>
                    <th>Chemistry：</th>
                    <td><asp:TextBox ID="chemistry" runat="server" MaxLength="5" placeholder="please type in the score" /></td>
                    <th>Political：</th>
                    <td><asp:TextBox ID="political" runat="server" MaxLength="5" placeholder="please type in the score" /></td>
                </tr>
                <tr>
                    <td colspan="4">
                        <asp:Button ID="submit" runat="server" Text="Submit" CssClass="btn btn-success" OnClick="submit_Click" />
                        <input type="reset" id="reset" value="Reset" class="btn btn-warning" />
                    </td>
                </tr>
              </tbody>
            </table>
            <asp:GridView ID="view" runat="server" CssClass="table table-responsive table-hover" >
                <HeaderStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                <RowStyle HorizontalAlign="Center" VerticalAlign="Middle" />
            </asp:GridView>
        </div>
        <footer>
            Design by KevinDing
        </footer>
    </form>
<script src="js/bootstrap.min.js" ></script>
<script src="js/index.js"></script>
</body>
</html>
