using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text.RegularExpressions;
using System.Data.OleDb;
using System.Configuration;

namespace Test
{
    public partial class index : System.Web.UI.Page
    {
        public static string ole = System.Configuration.ConfigurationManager.ConnectionStrings["Test"].ConnectionString;
        OleDbConnection odc = new OleDbConnection(ole);
        protected void Page_Load(object sender, EventArgs e)
        {
            odc.Open();
            string sql = "select * from Score";
            OleDbCommand ocom = new OleDbCommand(sql, odc);
            ocom.CommandType = System.Data.CommandType.Text;
            OleDbDataReader odr = ocom.ExecuteReader();
            view.DataSource = odr;
            view.DataBind();
            odc.Close();
        }

        protected void submit_Click(object sender, EventArgs e)
        {
            try
            {
                Double sum = Convert.ToSingle(chinese.Text) + Convert.ToSingle(math.Text) + Convert.ToSingle(english.Text) + Convert.ToSingle(physical.Text) + Convert.ToSingle(chemistry.Text) + Convert.ToSingle(political.Text);
                double avg = Convert.ToSingle(sum / 6);
                odc.Open();
                string sql = "insert into Score(stuNum,stuName,Chinese,Math,English,Physical,Chemistry,Political,ScoSum,Average) values(@num,@name,@cn,@math,@en,@phy,@che,@pol,@sum,@avg)";
                OleDbParameter[] par =
                {
                new OleDbParameter("@num",stuNum.Text),
                new OleDbParameter("@name",stuName.Text),
                new OleDbParameter("@cn", Convert.ToSingle(chinese.Text)),
                new OleDbParameter("@math",Convert.ToSingle(math.Text)),
                new OleDbParameter("@en",Convert.ToSingle(english.Text)),
                new OleDbParameter("@phy",Convert.ToSingle(physical.Text)),
                new OleDbParameter("@che",Convert.ToSingle(chemistry.Text)),
                new OleDbParameter("@pol",Convert.ToSingle(political.Text)),
                new OleDbParameter("@sum",sum),
                new OleDbParameter("@avg",avg)
            };

                OleDbCommand ocom = new OleDbCommand(sql, odc);
                ocom.CommandType = System.Data.CommandType.Text;
                ocom.Parameters.AddRange(par);
                if (ocom.ExecuteNonQuery() > 0)
                {
                    Response.Write("<script>alert('Exec successfully!');window.location.replace('index.aspx');</script>");
                }
                else
                {
                    Response.Write("<script>alert('Exec failure!');history.go(-1);</script>");
                }
                odc.Close();
            }
            catch
            {
                Response.Write("<script>alert('Exec failure!');history.go(-1);</script>");
            }
        }

    }
}