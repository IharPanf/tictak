<div class = "tic_tak">
    <script>
        var heightTable = <?php echo $heightField;?>;
        var widthTable  = <?php echo $widthField;?>;
        var countVic    = <?php echo $countVic;?>;
    </script>
    <table>
        <?php for ($i = 0; $i < $heightField; $i++ ) {
            echo "<tr data-row ='r".$i."'>";
               for($j = 0; $j < $widthField ; $j++ ) {
                   echo "<td class='cells' data-col='c".$j."'></td>";
               }
            echo "</tr>";
        }?>
    </table>
</div>


